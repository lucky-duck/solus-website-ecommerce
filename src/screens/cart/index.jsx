import React, { useEffect, useRef } from 'react';
import styled from 'astroturf';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Cart from '../../components/cart';
import Container from '../../components/container';
import Text from '../../components/ui-kit/text';
import { useProducts } from '../../hooks/use-products';
import Link from '../../components/ui-kit/link';
import Delivery from './components/delivery';
import { getPath } from '../../utils/paths';

const Screen = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const OrderDetails = styled.section`
  margin-bottom: 80px;
`;

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 3px;
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
  email: '',
  phone_number: '',
  address1: '',
  address2: '',
  country: '',
  post_code: '',
};

const validationSchema = Yup.object().shape({
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
  country: Yup.string()
    .min(2)
    .required(),
});

function CartScreen() {
  const { selectedProducts } = useProducts();
  const paypalButtonContainerNode = useRef(null);

  useEffect(() => {
    if (!selectedProducts.length) {
      return;
    }

    if (paypalButtonContainerNode.current) {
      paypalButtonContainerNode.current.innerHtml = '';
    }

    window.paypal
      .Buttons({
        createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: selectedProducts.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price;
                  }, 0),
                },
              },
            ],
          });
        },
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            alert(
              `Thank you, ${details.payer.name.given_name}. We will come back to you shortly!`
            );
          });
        },
      })
      .render(paypalButtonContainerNode.current);
  }, [selectedProducts]);

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
      isInitialValid={false}
    >
      {({ isValid }) => {
        function handlePaypalAreaClick(e) {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }

        return (
          <Screen>
            <Container narrow>
              <OrderDetails>
                <Header>
                  <Title>Your Order</Title>
                  <Text pale>
                    This is what is in your cart. You can still edit your
                    purchace.
                  </Text>
                </Header>
                <Cart altStyling />
              </OrderDetails>
              <Delivery />
              <SmallContainer>
                <Header>
                  <Title>Payment Confirmation</Title>
                  {isValid ? (
                    <Text pale>
                      Please, proceed to make a payment via PayPal
                    </Text>
                  ) : (
                    <Text danger>
                      Please, fill out the delivery section to proceed
                    </Text>
                  )}
                </Header>
                <PaypalButtonContainer
                  disabled={!isValid}
                  onClick={handlePaypalAreaClick}
                >
                  <div ref={paypalButtonContainerNode} />
                </PaypalButtonContainer>
              </SmallContainer>
            </Container>
          </Screen>
        );
      }}
    </Formik>
  );
}

export default CartScreen;
