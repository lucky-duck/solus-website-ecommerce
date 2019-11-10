import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import Cart from '../../../components/cart';

const Header = styled.div`
  margin-bottom: 41px;
`;

const StyledTitle = styled(Section.Title)`
  margin-bottom: 10px;
`;

const StyledText = styled(Text)`
  max-width: 345px;
`;

function ProductCart() {
  return (
    <Section>
      <Header>
        <StyledTitle>Your Cart</StyledTitle>
        <StyledText small pale>
          You still make changes to your selection or proceed directly to
          checkout!
        </StyledText>
      </Header>
      <Cart />
    </Section>
  );
}

export default ProductCart;
