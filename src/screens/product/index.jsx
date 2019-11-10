import React from 'react';
import styled from 'astroturf';
import { up, down, between, only } from 'styled-breakpoints';

import productImage from '../../images/product.jpg';
import Container from '../../components/container';
import Features from '../../components/features';
import ProductSelectors from './components/product-selectors';
import Description from './components/description';
import Colours from './components/colours';
import Flex from '../../components/ui-kit/flex';
import Cart from './components/cart';

const Screen = styled.div`
  padding-top: 152px;
`;

const StyledFlex = styled(Flex)`
  ${down('desktop')} {
    color: lightcoral;
  }
`;

const ImageArea = styled.div`
  max-width: 511px;
`;

const StickyItem = styled.div`
  position: sticky;
  top: 130px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 30px;
`;

const Content = styled.div`
  flex: 1 0 auto;
  padding-left: 60px;
`;

function ProductScreen() {
  return (
    <Screen>
      <Container>
        <StyledFlex posr jcsb>
          <ImageArea>
            <StickyItem>
              <Image src={productImage} alt={'Product'} />
              <Features />
            </StickyItem>
          </ImageArea>
          <Content>
            <ProductSelectors />
            <Description />
            <Colours />
            <Cart />
          </Content>
        </StyledFlex>
      </Container>
    </Screen>
  );
}

export default ProductScreen;
