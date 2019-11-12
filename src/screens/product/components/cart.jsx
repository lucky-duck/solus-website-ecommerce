import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import Cart from '../../../components/cart';
import { useProducts } from '../../../hooks/products';
import Link from '../../../components/ui-kit/link';
import Button from '../../../components/button';

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
    <Section>
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
      <StyledButton>Continue to payment</StyledButton>
      <BottomText pale extraSmall>
        Powered by{' '}
        <Link href={'https://stripe.com'} target={'blank'} extraSmall>
          Paypal
        </Link>
      </BottomText>
    </Section>
  );
}

export default ProductCart;
