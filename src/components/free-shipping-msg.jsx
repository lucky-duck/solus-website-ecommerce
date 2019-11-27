import React from 'react';
import styled from 'astroturf';

import { ReactComponent as IconLorry } from '../images/svg/icon-lorry.svg';

const StyledFreeShippingMsg = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled.div`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 600;
`;

const MessageHighlight = styled.span`
  @import '../styles/colors.scss';

  color: $colorPrimary;
`;

function FreeShippingMsg() {
  return (
    <StyledFreeShippingMsg>
      <IconLorry />
      <Message>
        <MessageHighlight>Free</MessageHighlight> shipping worldwide!
      </Message>
    </StyledFreeShippingMsg>
  );
}

export default FreeShippingMsg;
