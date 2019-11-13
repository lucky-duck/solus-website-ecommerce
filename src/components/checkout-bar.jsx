import React from 'react';
import styled from 'astroturf';
import { Sticky } from 'react-sticky';

import ProductPreview from './product-preview';
import Flex from './ui-kit/flex';
import Button from './button';
import { formatCurrency } from '../utils/utils';

const StyledCheckoutBar = styled.div`
  @import '../styles/colors.scss';
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
        <ItemPrice>{formatCurrency(500)}</ItemPrice>
      </ItemContent>
    </StyledItem>
  );
}

function CheckoutBar() {
  return (
    <Sticky>
      {({ style }) => {
        return (
          <StyledCheckoutBar style={{ ...style, top: 0 }}>
            <Flex aic>
              <Items>
                <Item />
                <Item />
              </Items>
              <StyledButton href={'/cart'}>Checkout</StyledButton>
            </Flex>
          </StyledCheckoutBar>
        );
      }}
    </Sticky>
  );
}

export default CheckoutBar;
