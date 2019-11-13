import React from 'react';
import styled, { css } from 'astroturf';

import mixins from '../styles/mixins';

const styles = css`
  .button {
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
  }
`;

const StyledButton = styled.button`
  composes: ${mixins.buttonReset} ${styles.button};
`;

const StyledButtonLink = styled.a`
  composes: ${styles.button};
  text-decoration: none;
`;

function Button(props) {
  const Component = props.href ? StyledButtonLink : StyledButton;

  return <Component type="button" {...props} />;
}

export default Button;
