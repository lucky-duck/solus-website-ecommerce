import React, { useRef, useEffect } from 'react';
import styled from 'astroturf';
import { StickyContainer } from 'react-sticky';

import Container from '../../components/container';
import Features from '../../components/features';
import ProductSelectors from './components/product-selectors';
import Description from './components/description';
import Colours from './components/colours';
import Flex from '../../components/ui-kit/flex';
import Cart from './components/cart';
import { useProducts } from '../../hooks/use-products';
import CheckoutBar from '../../components/checkout-bar';
import Screen from '../../components/screen';
import Carousel from '../../components/carousel';
import carouselImage1 from '../../images/carousel/1.jpg';
import carouselImage2 from '../../images/carousel/2.jpg';
import carouselImage3 from '../../images/carousel/3.jpg';
import carouselImage4 from '../../images/carousel/4.jpg';
import mixins from '../../styles/mixins';
import Text from '../../components/ui-kit/text';
import { facebookTrackEvent } from '../../utils/utils';
import { PRODUCTS } from '../../constants';

const StyledScreen = styled(Screen)`
  padding-top: 50px;

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
  top: 151px;
  padding-bottom: 45px;

  @media (max-width: 991px) {
    top: 130px;
  }

  @media (max-width: 767px) {
    position: static;
    padding-bottom: 0;
  }

  @media (max-height: 700px) {
    top: 125px;
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
  will-change: transform;

  //@media (max-height: 800px) {
  //height: 42vh;
  //}

  @media (max-width: 767px) {
    height: 100vw;
    margin-bottom: 0;
  }
`;

// const Image = styled.img`
//   display: block;
//   max-width: 100%;
//   height: auto;
//   max-height: 80%;
// `;

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
    right: -10px;
    bottom: 0;
    left: -10px;
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

const AccentTextContainer = styled.div`
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

const AccentText = styled.div`
  composes: ${mixins.fontFamilySansAlt};
  font-family: FuturaPTBook, 'Futura PT', 'San Francisco Display', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const FlexContainerRow = styled.div``;

const CAROUSEL_ITEMS = [
  {
    image: carouselImage1,
  },
  {
    image: carouselImage2,
  },
  {
    image: carouselImage3,
  },
  {
    image: carouselImage4,
  },
];

const WHITE_HEATER_INDEX = 3;

function ProductScreen() {
  const { selectedProducts, addOnWhiteSelectedCallback } = useProducts();
  const carouselInstance = useRef(null);
  const isWhiteSlideShown = useRef(false);

  useEffect(() => {
    addOnWhiteSelectedCallback(() => {
      !isWhiteSlideShown.current &&
        carouselInstance.current &&
        carouselInstance.current.slideTo(WHITE_HEATER_INDEX);
      isWhiteSlideShown.current = true;
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    facebookTrackEvent('ViewContent', {
      content_type: 'product_group',
      content_ids: `[${PRODUCTS.map((v) => v.id).join(',')}]`,
    });
  }, []);

  function handleCarouselInit(instance) {
    carouselInstance.current = instance;
  }

  return (
    <StickyContainer>
      <div>
        <CheckoutBar />
        <StyledScreen>
          <Container>
            <MobileHeader>
              <MobileTitle>Buy today</MobileTitle>
              <MobileSubtitle>Get your SOLUS+</MobileSubtitle>
            </MobileHeader>
            <StyledFlex posr jcsb>
              <ImageArea>
                <StickyItem>
                  <ImageContainer>
                    <Carousel
                      items={CAROUSEL_ITEMS}
                      onInit={handleCarouselInit}
                    />
                  </ImageContainer>
                  {/*<ImageContainer>*/}
                  {/*  <Image src={productImage} alt={'Product'} />*/}
                  {/*</ImageContainer>*/}
                  <Features />
                </StickyItem>
              </ImageArea>
              <Content>
                <FlexContainer>
                  <FlexContainerRow>
                    <ProductSelectors />
                    <AccentTextContainer>
                      <Text small accent>
                        <AccentText>FREE SHIPPING WORLDWIDE</AccentText>
                      </Text>
                    </AccentTextContainer>
                  </FlexContainerRow>
                  <FlexContainerRow>
                    <Description />
                  </FlexContainerRow>
                </FlexContainer>
                <FurtherSteps hide={selectedProducts.length > 0}>
                  <Colours />
                  <Cart />
                </FurtherSteps>
              </Content>
            </StyledFlex>
            <Features isMobile />
          </Container>
        </StyledScreen>
      </div>
    </StickyContainer>
  );
}

export default ProductScreen;
