import React from 'react';
import styled from 'astroturf';

import productImage from '../images/product.jpg';
import Container from '../components/container';
import Features from '../components/features';
import ProductSelectors from '../components/product-selectors';

const Screen = styled.div`
  padding-top: 52px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageArea = styled.div`
  max-width: 511px;
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

const Text = styled.div`
  font-weight: 500;
  font-size: 22px;
`;

const Link = styled.a`
  color: #2199f0;
  font-size: 13px;
  text-decoration: none;
`;

function ProductScreen() {
  return (
    <Screen>
      <Container>
        <Flex>
          <ImageArea>
            <Image src={productImage} alt={'Product'} />
            <Features />
          </ImageArea>
          <Content>
            <div style={{ marginBottom: 20 }}>
              <Text>Select your SOLUS+</Text>
              <Link href={'/'}>How many heaters do I need?</Link>
            </div>
            <ProductSelectors />
          </Content>
        </Flex>
      </Container>
    </Screen>
  );
}

export default ProductScreen;
