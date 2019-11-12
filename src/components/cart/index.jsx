import React from 'react';
import styled from 'astroturf';

import Item from './item';
import Text from '../ui-kit/text';
import Link from '../ui-kit/link';
import Flex from '../ui-kit/flex';
import Button from '../button';
import mixins from '../../styles/mixins';
import { useProducts } from '../../hooks/products';

const StyledCart = styled.div``;

const Items = styled.div`
  margin-bottom: 50px;
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

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 30px;
`;

const BottomText = styled(Text)`
  text-align: center;
  margin-top: 13px;
`;

function Cart() {
  const { selectedProducts, totalPrice } = useProducts();

  return (
    <StyledCart>
      <Items>
        {selectedProducts.map((item) => {
          return (
            <Item
              key={item.id}
              quantity={item.quantity}
              title={item.title}
              color={item.color}
            />
          );
        })}
      </Items>
      <div>
        <Text as={'h2'} bold big>
          <SubtotalTitle>Subtotal</SubtotalTitle>
        </Text>
        <Link extraSmall>Terms and conditions</Link>
        <SubtotalLine />
        <Flex aic jcsb>
          <Price big>£{totalPrice}</Price>
          <Text extraSmall pale>
            Includes VAT of approx. £40.00.*
          </Text>
        </Flex>
        <StyledButton>Continue to payment</StyledButton>
        <BottomText pale extraSmall>
          Powered by{' '}
          <Link href={'https://stripe.com'} target={'blank'} extraSmall>
            Paypal
          </Link>
        </BottomText>
      </div>
    </StyledCart>
  );
}

export default Cart;
