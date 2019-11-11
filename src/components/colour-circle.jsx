import React from 'react';
import styled from 'astroturf';

import mixins from '../styles/mixins';

const StyledColour = styled.div`
  composes: ${mixins.hoverDefault};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;

  &.active {
    border-color: #ff7020;
    cursor: default;
    pointer-events: none;
  }

  &.small {
    &:hover {
      opacity: 1;
    }

    width: 20px;
    height: 20px;
    pointer-events: none;
  }
`;

const ColourInner = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #1b1b1b;

  &.white {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(214, 223, 239, 0.25) 43.53%,
      rgba(123, 146, 179, 0.25) 100%
    );
  }

  &.small {
    width: 16px;
    height: 16px;
  }
`;

function Colour({ className, white, active, small }) {
  return (
    <StyledColour className={className} active={active} small={small}>
      <ColourInner white={white} small={small} />
    </StyledColour>
  );
}

export default Colour;
