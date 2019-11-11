import React from 'react';
import styled from 'astroturf';

import mixins from '../../styles/mixins';

const StyledInputSelect = styled.select`
  composes: ${mixins.fontFamilySansAlt};

  width: 51px;
  height: 32px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  color: #cfcfcf;
  background: #fff
    url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 95% 50%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 5px 8px;
  border-radius: 5px;

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
