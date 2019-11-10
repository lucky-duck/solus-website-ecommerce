import React from 'react';
import styled from 'astroturf';

import Item from './item';
import Text from '../ui-kit/text';
import Link from '../ui-kit/link';
import Flex from '../ui-kit/flex';
import Button from '../button';

const StyledCart = styled.div``;

const Items = styled.div`
  margin-bottom: 70px;
`;

const SubtotalLine = styled.div`
  height: 1px;
  background-color: #dadada;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Price = styled(Text)``;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const BottomText = styled(Text)`
  text-align: center;
  margin-top: 13px;
`;

function Cart() {
  return (
    <StyledCart>
      <Items>
        <Item title={'SOLUS+ M1 200W Heater'} description={'40x45x80 cm'} />
        <Item title={'SOLUS+ M1 200W Heater'} description={'40x45x80 cm'} />
      </Items>
      <div>
        <Text as={'h2'} bold big>
          Subtotal
        </Text>
        <Link extraSmall>Terms and conditions</Link>
        <SubtotalLine />
        <Flex aic jcsb>
          <Price big>£500</Price>
          <Text extraSmall pale>
            Includes VAT of approx. £40.00.*
          </Text>
        </Flex>
        <StyledButton>Continue to payment</StyledButton>
        <BottomText pale extraSmall>
          Powered by{' '}
          <Link href={'https://stripe.com'} target={'_blank'} extraSmall>
            Stripe
          </Link>
        </BottomText>
      </div>
    </StyledCart>
  );
}

export default Cart;
