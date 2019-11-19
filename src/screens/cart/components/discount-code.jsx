import React, { useState } from 'react';
import styled from 'astroturf';

import InputText from '../../../components/controls/input-text';
import { SmallContainer } from '../index';
import Flex from '../../../components/ui-kit/flex';
import Button from '../../../components/button';
import { DISCOUNT_CODES } from '../../../constants';
import { useProducts } from '../../../hooks/use-products';
import Text from '../../../components/ui-kit/text';

const StyledButton = styled(Button)`
  width: 80px;
  margin-left: 20px;
`;

const InputContainer = styled(Flex)`
  transition: filter 0.55s ease-out, opacity 0.55s ease-out;

  &.disabled {
    filter: grayscale(1);
    opacity: 0.5;
    pointer-events: none;
  }
`;

const DiscountAppliedText = styled(Text)`
  margin-top: 10px;
  text-transform: uppercase;
`;

function DiscountCode() {
  const [inputValue, setInputValue] = useState('');
  const { discountData, setDiscountData } = useProducts();

  function handleApplyClick() {
    const discountData = DISCOUNT_CODES[inputValue];
    if (!discountData) {
      return;
    }
    setDiscountData(discountData);
  }

  function handleInputChange(e) {
    setInputValue(e.currentTarget.value);
  }

  const discountApplied = !!discountData;

  return (
    <SmallContainer>
      <InputContainer aic disabled={discountApplied}>
        <InputText
          name={'discount_code'}
          placeholder={'XXXX'}
          value={inputValue}
          onChange={handleInputChange}
        />
        <StyledButton
          borderRadius
          autoComplete={'new-password'}
          onClick={handleApplyClick}
        >
          Apply
        </StyledButton>
      </InputContainer>
      {discountApplied && (
        <DiscountAppliedText accent>
          {discountData.discountPercent}% discount applied!
        </DiscountAppliedText>
      )}
    </SmallContainer>
  );
}

export default DiscountCode;
