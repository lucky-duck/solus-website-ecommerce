import React from 'react';
import styled from 'astroturf';

import ProductPreview from './product-preview';
import Flex from './ui-kit/flex';
import Button from './button';

const StyledCheckoutBar = styled.div`
  @import '../styles/colors.scss';

  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 101px;
  background-color: $colorBlack;
  z-index: 10;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 122px;
  height: 40px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
`;

const ItemContent = styled.div`
  margin-right: 10px;
`;

const ItemTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  max-width: 120px;
`;

const ItemQuantity = styled.span`
  color: #929292;
`;

const ItemPrice = styled.div`
  color: #929292;
`;

function Item() {
  return (
    <StyledItem>
      <ProductPreview />
      <ItemContent>
        <ItemTitle>
          <ItemQuantity>2x</ItemQuantity> SOLUS+ M1 200W Heater
        </ItemTitle>
        <ItemPrice>£500.00</ItemPrice>
      </ItemContent>
    </StyledItem>
  );
}

function CheckoutBar() {
  return (
    <StyledCheckoutBar>
      <Flex aic>
        <Items>
          <Item />
          <Item />
        </Items>
        <StyledButton>Checkout</StyledButton>
      </Flex>
    </StyledCheckoutBar>
  );
}

export default CheckoutBar;
