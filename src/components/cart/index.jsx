import React from 'react';
import styled from 'astroturf';

import Item from './item';
import Text from '../ui-kit/text';
import Flex from '../ui-kit/flex';
import mixins from '../../styles/mixins';
import { useProducts } from '../../hooks/use-products';
import FormatCurrency from '../format-currency';
import { useCurrency } from '../../hooks/use-currency';

const StyledCart = styled.div``;

const Items = styled.div`
  margin-bottom: 80px;

  &.altStyling {
    margin-bottom: 40px;
  }
`;

const SubtotalTitle = styled.span`
  composes: ${mixins.fontFamilySans};
`;

const SubtotalLine = styled.div`
  height: 1px;
  background-color: #dadada;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Price = styled(Text)`
  font-size: 26px !important;

  @media (max-width: 991px) {
    font-size: 22px !important;
  }
`;

function Cart({ altStyling }) {
  const {
    cartSelectedProducts: selectedProducts,
    totalPrice,
    removeProduct,
  } = useProducts();
  const { currencyData } = useCurrency();

  return (
    <StyledCart>
      <Items altStyling={altStyling}>
        {selectedProducts.map((item) => {
          return (
            <Item
              key={item.id}
              quantity={item.quantity}
              price={currencyData ? item.price[currencyData.code] : 0}
              title={item.title}
              description={item.description}
              color={item.color}
              onRemove={() => removeProduct(item.productId, item.color)}
              isWarranty={item.isWarranty}
            />
          );
        })}
      </Items>
      <div>
        <Flex fdc={!altStyling} jcsb={altStyling} aic={altStyling}>
          <Text as={'h2'} bold big>
            <SubtotalTitle>Subtotal</SubtotalTitle>
          </Text>
          {/*<Link extraSmall>Terms and conditions</Link>*/}
        </Flex>
        <SubtotalLine />
        <Flex aic jcsb>
          <Price>
            <FormatCurrency>{totalPrice}</FormatCurrency>
          </Price>
          {/*<Text extraSmall pale>*/}
          {/*  Includes VAT of approx. {formatCurrency(40)}**/}
          {/*</Text>*/}
        </Flex>
      </div>
    </StyledCart>
  );
}

export default Cart;
