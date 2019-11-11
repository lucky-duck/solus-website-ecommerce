import React from 'react';
import styled from 'astroturf';

import ProductScreen from './screens/product';
import mixins from './styles/mixins';
import CheckoutBar from './components/checkout-bar';
import { ProductsProvider } from './hooks/products';

const Wrapper = styled.div`
  composes: ${mixins.fontFamilySans};
  color: #1b1b1b;
`;

function App() {
  return (
    <ProductsProvider>
      <Wrapper>
        <CheckoutBar />
        <ProductScreen />
      </Wrapper>
    </ProductsProvider>
  );
}

export default App;
