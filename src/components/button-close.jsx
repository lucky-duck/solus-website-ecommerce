import React from 'react';
import styled from 'astroturf';

import mixins from '../styles/mixins';
import { ReactComponent as IconCross } from '../images/svg/icon-cross.svg';

const StyledButtonClose = styled.div`
  composes: ${mixins.hoverDefault};

  cursor: pointer;
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
  }
`;

function ButtonClose(props) {
  return (
    <StyledButtonClose {...props}>
      <IconCross />
    </StyledButtonClose>
  );
}

export default ButtonClose;
