import React from 'react';
import styled from 'astroturf';

import Text from '../../../components/ui-kit/text';
import InputText from '../../../components/controls/input-text';
import { Header, SmallContainer, Title } from '../index';

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

function Delivery() {
  return (
    <SmallContainer>
      <Header>
        <Title>Delivery Setup</Title>
        <Text pale>To get started, enter your details</Text>
      </Header>
      <DeliveryInputs>
        <DeliveryInputSection>
          <InputText label={'Email'} placeholder={'Your email address here'} />
        </DeliveryInputSection>
        <DeliveryInputSection>
          <InputText
            label={'Phone Number'}
            placeholder={'Your phone number here'}
          />
        </DeliveryInputSection>
        <DeliveryInputSection>
          <InputText mb label={'Full Address'} placeholder={'Address Line 1'} />
          <InputText mb placeholder={'Address Line 2'} />
          <InputText mb placeholder={'Country'} />
          <InputText placeholder={'Post Code'} />
        </DeliveryInputSection>
      </DeliveryInputs>
    </SmallContainer>
  );
}

export default Delivery;
