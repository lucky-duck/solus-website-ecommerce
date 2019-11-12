import React, { useEffect } from 'react';
import styled from 'astroturf';

import Cart from '../components/cart';
import Container from '../components/container';
import Text from '../components/ui-kit/text';

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

function CartScreen() {
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
    // window.paypal.Button.render(
    //   {
    //     // Configure environment
    //     env: 'sandbox',
    //     client: {
    //       sandbox: 'Ab115IoTrFjgeoyb2z9JEL2Njm7ovP8uBUY-FBWYvQvZMUuIkMb6G-JyIR0DTDw4Xh8bQ8tsaQxVpa8A',
    //       production: 'demo_production_client_id',
    //     },
    //     // Customize button (optional)
    //     locale: 'en_US',
    //     style: {
    //       size: 'small',
    //       color: 'gold',
    //       shape: 'pill',
    //     },
    //
    //     // Enable Pay Now checkout flow (optional)
    //     commit: true,
    //
    //     // Set up a payment
    //     payment: function(data, actions) {
    //       return actions.payment.create({
    //         transactions: [
    //           {
    //             amount: {
    //               total: '0.01',
    //               currency: 'USD',
    //             },
    //           },
    //         ],
    //       });
    //     },
    //     // Execute the payment
    //     onAuthorize: function(data, actions) {
    //       return actions.payment.execute().then(function() {
    //         // Show a confirmation message to the buyer
    //         window.alert('Thank you for your purchase!');
    //       });
    //     },
    //   },
    //   '#paypal-button-container'
    // );
  }, []);

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
