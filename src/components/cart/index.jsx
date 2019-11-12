import React from 'react';
import styled from 'astroturf';

import Item from './item';
import Text from '../ui-kit/text';
import Link from '../ui-kit/link';
import Flex from '../ui-kit/flex';
import mixins from '../../styles/mixins';
import { useProducts } from '../../hooks/products';

const StyledCart = styled.div``;

const Items = styled.div`
  margin-bottom: 50px;

  &.altStyling {
    margin-bottom: 10px;
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

const Price = styled(Text)``;

function Cart({ altStyling }) {
  const { selectedProducts, totalPrice, removeProduct } = useProducts();

  return (
    <StyledCart>
      <Items altStyling={altStyling}>
        {selectedProducts.map((item) => {
          return (
            <Item
              key={item.id}
              quantity={item.quantity}
              title={item.title}
              color={item.color}
              onRemove={() => removeProduct(item.id)}
            />
          );
        })}
      </Items>
      <div>
        <Flex fdc={!altStyling} jcsb={altStyling} aic={altStyling}>
          <Text as={'h2'} bold big>
            <SubtotalTitle>Subtotal</SubtotalTitle>
          </Text>
          <Link extraSmall>Terms and conditions</Link>
        </Flex>
        <SubtotalLine />
        <Flex aic jcsb>
          <Price big>£{totalPrice}</Price>
          <Text extraSmall pale>
            Includes VAT of approx. £40.00.*
          </Text>
        </Flex>
      </div>
    </StyledCart>
  );
}

export default Cart;
