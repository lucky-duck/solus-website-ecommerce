import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import Cart from '../../../components/cart';
import { useProducts } from '../../../hooks/use-products';
import Link from '../../../components/ui-kit/link';
import Button from '../../../components/button';
import { getPath } from '../../../utils/paths';

const Header = styled.div`
  margin-bottom: 41px;
`;

const StyledTitle = styled(Section.Title)`
  margin-bottom: 10px;
`;

const StyledText = styled(Text)`
  max-width: 345px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 30px;
`;

const BottomText = styled(Text)`
  text-align: center;
  margin-top: 13px;
`;

function ProductCart() {
  const { selectedProducts } = useProducts();

  return (
    <Section noBorder>
      {selectedProducts.length > 0 && (
        <Header>
          <StyledTitle>Your Cart</StyledTitle>
          <StyledText small pale>
            You still make changes to your selection or proceed directly to
            checkout!
          </StyledText>
        </Header>
      )}
      <Cart />
      <StyledButton href={getPath.cart()}>Continue to payment</StyledButton>
      <BottomText pale extraSmall>
        Powered by{' '}
        <Link href={'https://paypal.com'} target={'blank'} extraSmall>
          PayPal
        </Link>
      </BottomText>
    </Section>
  );
}

export default ProductCart;
