import React from 'react';
import styled from 'astroturf';
import { Sticky } from 'react-sticky';

import ProductPreview from './product-preview';
import Flex from './ui-kit/flex';
import Button from './button';
import { useProducts } from '../hooks/use-products';
import { getPath } from '../utils/paths';
import { COLORS } from '../constants';
import FormatCurrency from './format-currency';
import { useCurrency } from '../hooks/use-currency';

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
  padding-right: 25px;
`;

const ItemContent = styled.div``;

const ItemTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  max-width: 150px;
`;

const ItemQuantity = styled.span`
  color: #929292;
`;

const ItemPrice = styled.div`
  color: #929292;
`;

const More = styled.div`
  color: #929292;
  font-size: 14px;
  margin-right: 25px;
`;

function Item({ quantity, price, title, color }) {
  return (
    <StyledItem>
      <ProductPreview white={color === COLORS.WHITE} />
      <ItemContent>
        <ItemTitle>
          <ItemQuantity>{quantity}x</ItemQuantity>{' '}
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </ItemTitle>
        <ItemPrice>
          <FormatCurrency>{price * quantity}</FormatCurrency>
        </ItemPrice>
      </ItemContent>
    </StyledItem>
  );
}

const MAX_ITEMS = 3;

function CheckoutBar() {
  const { cartSelectedProducts: selectedProducts } = useProducts();
  const { currencyData } = useCurrency();

  if (!selectedProducts.length) {
    return null;
  }

  return (
    <Sticky>
      {({ style }) => {
        return (
          <StyledCheckoutBar style={{ ...style, top: 0 }}>
            <Flex aic>
              <Items>
                {selectedProducts.slice(0, MAX_ITEMS).map((item, index) => {
                  return (
                    <Item
                      key={index}
                      title={item.title}
                      quantity={item.quantity}
                      price={currencyData ? item.price[currencyData.code] : 0}
                      color={item.color}
                    />
                  );
                })}
                {selectedProducts.length > MAX_ITEMS && (
                  <More>+{selectedProducts.length - MAX_ITEMS} more</More>
                )}
              </Items>
              <StyledButton href={getPath.cart()}>Checkout</StyledButton>
            </Flex>
          </StyledCheckoutBar>
        );
      }}
    </Sticky>
  );
}

export default CheckoutBar;
