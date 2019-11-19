import React, { useState } from 'react';
import styled from 'astroturf';

import InputText from '../../../components/controls/input-text';
import { SmallContainer } from '../index';
import Flex from '../../../components/ui-kit/flex';
import Button from '../../../components/button';

const StyledButton = styled(Button)`
  width: 80px;
  margin-left: 20px;
`;

function DiscountCode() {
  const [inputValue, setInputValue] = useState('');

  function handleApplyClick() {}

  return (
    <SmallContainer>
      <Flex aic>
        <InputText name={'discount'} placeholder={'XXXX'} />
        <StyledButton
          borderRadius
          value={inputValue}
          autoComplete={'new-password'}
          onClick={handleApplyClick}
        >
          Apply
        </StyledButton>
      </Flex>
    </SmallContainer>
  );
}

export default DiscountCode;
