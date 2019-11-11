import React from 'react';
import styled from 'astroturf';

import productImage from '../../images/heater-black.jpg';
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
  @media (max-width: 767px) {
    flex-direction: column !important;
  }
`;

const ImageArea = styled.div`
  max-width: 511px;

  @media (max-width: 991px) {
    max-width: 310px;
  }
`;

const StickyItem = styled.div`
  position: sticky;
  top: 130px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 410px;
  height: 50vh;
  background: linear-gradient(
    219.9deg,
    rgba(255, 255, 255, 0.25) -23.1%,
    rgba(214, 223, 239, 0.25) 35.55%,
    rgba(123, 146, 179, 0.25) 111.64%
  );
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-height: 800px) {
    height: 40vh;
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 80%;
`;

const Content = styled.div`
  flex: 1 0 auto;
  padding-left: 60px;

  @media (max-width: 991px) {
    padding-left: 30px;
  }
`;

function ProductScreen() {
  return (
    <Screen>
      <Container>
        <StyledFlex posr jcsb>
          <ImageArea>
            <StickyItem>
              <ImageContainer>
                <Image src={productImage} alt={'Product'} />
              </ImageContainer>
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
