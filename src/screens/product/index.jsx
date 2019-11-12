import React from 'react';
import styled from 'astroturf';

import productImage from '../../images/heater-black.png';
import Container from '../../components/container';
import Features from '../../components/features';
import ProductSelectors from './components/product-selectors';
import Description from './components/description';
import Colours from './components/colours';
import Flex from '../../components/ui-kit/flex';
import Cart from './components/cart';
import { IS_MOBILE } from '../../constants';
import { useProducts } from '../../hooks/products';
import CheckoutBar from '../../components/checkout-bar';

const Screen = styled.div`
  padding-top: 152px;

  @media (max-width: 767px) {
    padding-top: 46px;
  }
`;

const StyledFlex = styled(Flex)`
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ImageArea = styled.div`
  max-width: 511px;

  @media (max-width: 991px) {
    max-width: 310px;
  }

  @media (max-width: 767px) {
    max-width: none;
    margin-bottom: 36px;
  }
`;

const StickyItem = styled.div`
  position: sticky;
  top: 130px;

  @media (max-width: 767px) {
    position: static;
  }
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

  @media (max-width: 767px) {
    height: 100vw;
    margin-bottom: 0;
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

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const FurtherSteps = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 74.91%
      ),
      rgba(255, 255, 255, 0.5);
  }

  @keyframes product-further-steps {
    from {
      opacity: 1;
      visibility: visible;
    }

    to {
      opacity: 0;
      visibility: hidden;
    }
  }

  &.hide {
    &:before {
      animation: product-further-steps 0.55s ease-out forwards;
    }
  }
`;

const MobileHeader = styled.div`
  display: none;
  text-align: center;
  margin-bottom: 36px;

  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const MobileSubtitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 28px;
  font-weight: 500;
`;

function ProductScreen() {
  const { selectedProducts } = useProducts();

  return (
    <Screen>
      <CheckoutBar />
      <Container>
        <MobileHeader>
          <MobileTitle>Buy today</MobileTitle>
          <MobileSubtitle>Get your SOLUS+</MobileSubtitle>
        </MobileHeader>
        <StyledFlex posr jcsb>
          <ImageArea>
            <StickyItem>
              <ImageContainer>
                <Image src={productImage} alt={'Product'} />
              </ImageContainer>
              {!IS_MOBILE && <Features />}
            </StickyItem>
          </ImageArea>
          <Content>
            <ProductSelectors />
            <Description />
            <FurtherSteps hide={selectedProducts.length > 0}>
              <Colours />
              <Cart />
            </FurtherSteps>
          </Content>
        </StyledFlex>
        {IS_MOBILE && <Features />}
      </Container>
    </Screen>
  );
}

export default ProductScreen;
