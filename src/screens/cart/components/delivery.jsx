import React from 'react';
import styled from 'astroturf';
import { Field } from 'formik';

import Text from '../../../components/ui-kit/text';
import InputText from '../../../components/controls/input-text';
import { Header, SmallContainer, Title } from '../index';
import countries from '../../../countries.json';
import InputSelect from '../../../components/controls/input-select';
import { COUNTRY_FIELD_NAME } from '../../../constants';

const DeliveryInputs = styled.div``;

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
          <Field
            name={'email'}
            label={'Email'}
            placeholder={'Your email address here'}
            component={InputText}
          />
        </DeliveryInputSection>
        <DeliveryInputSection>
          <Field
            name={'phone_number'}
            label={'Phone Number'}
            placeholder={'Your phone number here'}
            component={InputText}
          />
        </DeliveryInputSection>
        <DeliveryInputSection>
          <Field
            name={'address1'}
            mb
            label={'Full Address'}
            placeholder={'Address Line 1'}
            component={InputText}
          />
          <Field
            name={'address2'}
            mb
            placeholder={'Address Line 2'}
            component={InputText}
          />
          <Field
            name={COUNTRY_FIELD_NAME}
            mb
            placeholder={'Country'}
            component={InputSelect}
            options={countries}
            withInput
          />
          <Field
            name={'post_code'}
            placeholder={'Post Code'}
            component={InputText}
          />
        </DeliveryInputSection>
      </DeliveryInputs>
    </SmallContainer>
  );
}

export default Delivery;
