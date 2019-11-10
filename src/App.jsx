import React from 'react';
import styled from 'astroturf';

import ProductScreen from './screens/product';
import mixins from './styles/mixins';
import CheckoutBar from './components/checkout-bar';

const Wrapper = styled.div`
  composes: ${mixins.fontFamilySans};
  color: #1b1b1b;
`;

function App() {
  return (
    <Wrapper>
      <CheckoutBar />
      <ProductScreen />
    </Wrapper>
  );
}

export default App;
