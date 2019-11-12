import React, { useEffect } from 'react';
import styled from 'astroturf';

import Cart from '../components/cart';
import Container from '../components/container';
import Text from '../components/ui-kit/text';
import { useProducts } from '../hooks/products';
import Link from '../components/ui-kit/link';
import InputText from '../components/controls/input-text';

const Screen = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const OrderDetails = styled.section`
  margin-bottom: 80px;
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const EmptyText = styled(Text)`
  margin-top: 20px;
`;

const SmallContainer = styled.div`
  max-width: 430px;
`;

const DeliveryInputs = styled.div`
  margin-bottom: 60px;
`;

const DeliveryInputSection = styled.fieldset`
  margin-bottom: 35px;
  border: none;
  outline: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

function CartScreen() {
  const { selectedProducts } = useProducts();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '0.01',
                },
              },
            ],
          });
        },
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
      })
      .render('#paypal-button-container');
  }, []);

  if (!selectedProducts || !selectedProducts.length) {
    return (
      <Screen>
        <Container>
          <Title>Your cart currently is empty.</Title>
          <EmptyText>
            You can select products on <Link href={'/buy'}>this page</Link>
          </EmptyText>
        </Container>
      </Screen>
    );
  }

  return (
    <Screen>
      <Container narrow>
        <OrderDetails>
          <Header>
            <Title>Your Order</Title>
            <Text pale>
              This is what is in your cart. You can still edit your purchace.
            </Text>
          </Header>
          <Cart altStyling />
        </OrderDetails>
        <SmallContainer>
          <Header>
            <Title>Delivery Setup</Title>
            <Text pale>To get started, enter your details</Text>
          </Header>
          <DeliveryInputs>
            <DeliveryInputSection>
              <InputText
                label={'Email'}
                placeholder={'Your email address here'}
              />
            </DeliveryInputSection>
            <DeliveryInputSection>
              <InputText
                label={'Phone Number'}
                placeholder={'Your phone number here'}
              />
            </DeliveryInputSection>
            <DeliveryInputSection>
              <InputText
                mb
                label={'Full Address'}
                placeholder={'Address Line 1'}
              />
              <InputText mb placeholder={'Address Line 2'} />
              <InputText mb placeholder={'Country'} />
              <InputText placeholder={'Post Code'} />
            </DeliveryInputSection>
          </DeliveryInputs>
        </SmallContainer>
        <SmallContainer>
          <Header>
            <Title>Payment Confirmation</Title>
            <Text pale>Please, proceed to make a payment via PayPal</Text>
          </Header>
          <div id={'paypal-button-container'} />
        </SmallContainer>
      </Container>
    </Screen>
  );
}

export default CartScreen;
