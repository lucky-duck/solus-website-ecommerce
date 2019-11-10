import React from 'react';
import styled from 'astroturf';

import mixins from '../../styles/mixins';

const StyledInputSelect = styled.select`
  composes: ${mixins.fontFamilySansAlt};

  width: 51px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  color: #cfcfcf;

  &.active {
    color: #1b1b1b;
  }
`;

function InputSelect({ options, active }) {
  return (
    <StyledInputSelect type={'select'} active={active}>
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
