import React from 'react';
import styled from 'astroturf';
import mixins from '../styles/mixins';

const StyledButton = styled.button`
  @import '../styles/colors.scss';
  composes: ${mixins.hoverDefault};
  composes: ${mixins.fontFamilySans};

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $colorPrimary;
  color: #fff;
  height: 51px;
  font-size: 17px;
  cursor: pointer;
  user-select: none;
  border: none;
`;

function Button(props) {
  return <StyledButton type="button" {...props}  />;
}

export default Button;
