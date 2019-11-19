import React from 'react';
import Container from '../../components/container';
import { Title } from '../cart';
import Screen from '../../components/screen';
import styled from 'astroturf';
import Text from '../../components/ui-kit/text';

const EmptyText = styled(Text)`
  margin-top: 20px;
`;

function PaymentSuccessScreen() {
  return (
    <Screen>
      <Container>
        <Title>Successful Payment</Title>
        <EmptyText>
          Thank you for your purchase. We will come back to you shortly!
        </EmptyText>
      </Container>
    </Screen>
  );
}

export default PaymentSuccessScreen;
