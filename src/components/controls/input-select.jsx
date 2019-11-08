import React from 'react';
import styled from 'astroturf';

const StyledInputSelect = styled.select`
  width: 51px;
  height: 32px;
  background-color: #fff;
`;

function InputSelect({ options }) {
  return (
    <StyledInputSelect type={'select'}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </StyledInputSelect>
  );
}

export default InputSelect;
