import React, { useEffect } from 'react';
import styled from 'astroturf';

import Cart from '../components/cart';
import Container from '../components/container';
import Text from '../components/ui-kit/text';
import { useProducts } from '../hooks/products';
import Link from '../components/ui-kit/link';

const Screen = styled.div`
  padding-top: 60px;
`;

const OrderDetails = styled.section`
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
`;

const EmptyText = styled(Text)`
  margin-top: 20px;
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
      <Container>
        <Title>Your cart currently is empty.</Title>
        <EmptyText>
          You can select products on <Link href={'/buy'}>this page</Link>
        </EmptyText>
      </Container>
    );
  }

  return (
    <Screen>
      <Container>
        <OrderDetails>
          <Title>Your Order</Title>
          <Cart />
        </OrderDetails>
        <Title>Delivery Setup</Title>
        <Text small pale>
          To get started, enter your details
        </Text>
        <div id={'paypal-button-container'} />
      </Container>
    </Screen>
  );
}

export default CartScreen;
