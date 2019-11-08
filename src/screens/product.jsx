import React from 'react';
import styled from 'astroturf';

import productImage from '../images/product.jpg';

const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Image = styled('img')``;

const Content = styled('div')``;

const Text = styled('div')`
  font-weight: 700;
`;

function ProductScreen() {
  return (
    <Flex>
      <Image src={productImage} alt={'Product'} />
      <Content>
        <Text>Select your SOLUS+</Text>
      </Content>
    </Flex>
  );
}

export default ProductScreen;
