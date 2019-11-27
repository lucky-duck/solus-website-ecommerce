import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'astroturf';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import omit from 'lodash/omit';
import { navigate } from '@reach/router';

import Cart from '../../components/cart';
import Container from '../../components/container';
import Text from '../../components/ui-kit/text';
import { useProducts } from '../../hooks/use-products';
import Link from '../../components/ui-kit/link';
import Delivery from './components/delivery';
import { getPath } from '../../utils/paths';
import { COUNTRY_FIELD_NAME, DEFAULT_CURRENCY_CODE } from '../../constants';
import countries from '../../countries.json';
import {
  convertSelectedProductsToPlainText,
  facebookTrackEvent,
  removeNodeChildren,
} from '../../utils/utils';
import DiscountCode from './components/discount-code';
import Screen from '../../components/screen';

const ZAPIER_WEBHOOK_URL =
  'https://hooks.zapier.com/hooks/catch/6164333/o62kq63/';

const Section = styled.section`
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }

  &.showAbove {
    position: relative;
    z-index: 9999;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }
`;

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 3px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const EmptyText = styled(Text)`
  margin-top: 20px;
`;

export const SmallContainer = styled.div`
  max-width: 430px;
`;

const PaypalButtonContainer = styled.div`
  position: relative;
  transition: filter 0.55s ease-out;

  &.disabled {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99999;
    }
  }
`;

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address1: '',
  address2: '',
  [COUNTRY_FIELD_NAME]: '',
  post_code: '',
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2)
    .required(),
  last_name: Yup.string()
    .min(2)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  phone_number: Yup.string()
    .min(10)
    .required(),
  address1: Yup.string()
    .min(2)
    .required(),
  address2: Yup.string(),
  [COUNTRY_FIELD_NAME]: Yup.string().required(),
});

function CartScreen() {
  const {
    cartSelectedProducts: selectedProducts,
    totalPrice,
    resetCart,
    discountData,
  } = useProducts();

  if (!selectedProducts || !selectedProducts.length) {
    return (
      <Screen>
        <Container>
          <Title>Your cart currently is empty.</Title>
          <EmptyText>
            You can select products on{' '}
            <Link href={getPath.buy()}>this page</Link>
          </EmptyText>
        </Container>
      </Screen>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => undefined}
      validateOnMount
    >
      {(formikProps) => {
        return (
          <Inner
            formikProps={formikProps}
            selectedProducts={selectedProducts}
            totalPrice={totalPrice}
            discountData={discountData}
            onResetCart={resetCart}
          />
        );
      }}
    </Formik>
  );
}

async function sendDeliveryDetails(
  selectedProducts,
  values,
  discountData,
  paypalDetails
) {
  try {
    console.warn('Sending delivery information', JSON.stringify(values));
    const countryData = countries.filter(
      (v) => v.value === values[COUNTRY_FIELD_NAME]
    )[0];
    const valuesToSend = {
      ...omit(values, [COUNTRY_FIELD_NAME]),
      transactionId: paypalDetails.id,
      country: countryData.label,
      boughtProducts: convertSelectedProductsToPlainText(selectedProducts, {
        plainTextLineBreak: true,
      }),
      discountPercent: discountData ? discountData.discountPercent : 0,
    };
    await axios({
      url: ZAPIER_WEBHOOK_URL,
      method: 'post',
      data: valuesToSend,
      withCredentials: false,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    alert(
      'Sorry! Cannot save delivery details. Please, contact us for more information.'
    );
    console.error(error);
  }
}

function Inner({
  formikProps,
  selectedProducts,
  totalPrice,
  discountData,
  onResetCart,
}) {
  const { isValid, values } = formikProps;
  const paypalButtonContainerNode = useRef(null);
  const paypalButtonsComponent = useRef(null);

  const handleApprove = useCallback(
    (data, actions) => {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(async (details) => {
        // This function shows a transaction success message to your buyer.
        // function getPayerName() {
        //   const name =
        //     details &&
        //     details.payer &&
        //     details.payer.name &&
        //     details.payer.name.given_name;
        //
        //   return name ? `, ${name}` : '';
        // }

        sendDeliveryDetails(selectedProducts, values, discountData, details);

        facebookTrackEvent('Purchase', {
          content_type: 'product_group',
          content_ids: `[${selectedProducts.map((v) => v.id).join(',')}]`,
          currency: DEFAULT_CURRENCY_CODE,
          value: totalPrice,
        });

        onResetCart && onResetCart();

        navigate(getPath.paymentSuccess());
      });
    },
    [onResetCart, selectedProducts, values, discountData, totalPrice]
  );

  useEffect(() => {
    if (!paypalButtonContainerNode.current) {
      return;
    }

    removeNodeChildren(paypalButtonContainerNode.current);

    paypalButtonsComponent.current = window.paypal.Buttons({
      style: {
        layout: 'vertical',
        label: 'pay',
      },
      createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [
            {
              amount: { value: totalPrice },
              // items: selectedProducts.map((item) => {
              //   const result = {
              //     name: item.title,
              //     sku: `sku${item.id}`,
              //     amount: Number(
              //       formatCurrency(item.price, { noCurrency: true })
              //     ),
              //     quantity: item.quantity,
              //     currency: DEFAULT_CURRENCY_CODE,
              //     description: `${
              //       item.description
              //         ? item.description.replace('<br/>', ' ')
              //         : ''
              //     }`,
              //   };
              //   return result;
              // }),
            },
          ],
        });
      },
      onApprove: () => null,
    });

    paypalButtonsComponent.current.render(paypalButtonContainerNode.current);
  }, [totalPrice]);

  useEffect(() => {
    if (!paypalButtonsComponent.current) {
      return;
    }

    paypalButtonsComponent.current.updateProps({
      onApprove: handleApprove,
    });
  }, [values, selectedProducts, handleApprove]);

  useEffect(() => {
    facebookTrackEvent('AddToCart', {
      content_type: 'product_group',
      content_ids: `[${selectedProducts.map((v) => v.id).join(',')}]`,
    });
  }, [selectedProducts]);

  return (
    <Screen>
      <Container narrow>
        <Section>
          <Header>
            <Title>Your Order</Title>
            <Text pale>
              This is what is in your cart. You can still edit your purchase.
            </Text>
          </Header>
          <Cart altStyling />
        </Section>
        <Section>
          <Header>
            <Title>Discount code</Title>
          </Header>
          <DiscountCode />
        </Section>
        <Section showAbove>
          <Delivery />
        </Section>
        <Section>
          <SmallContainer>
            <Header>
              <Title>Payment Confirmation</Title>
              {isValid ? (
                <Text pale>Please, proceed to make a payment via PayPal</Text>
              ) : (
                <Text danger>
                  Please, fill out the delivery section to proceed
                </Text>
              )}
            </Header>
            <PaypalButtonContainer disabled={!isValid}>
              <div ref={paypalButtonContainerNode} />
            </PaypalButtonContainer>
          </SmallContainer>
        </Section>
      </Container>
    </Screen>
  );
}

export default CartScreen;
