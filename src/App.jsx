import React from 'react';
import styled from 'astroturf';
import { Router } from '@reach/router';

import ProductScreen from './screens/product';
import mixins from './styles/mixins';
import { ProductsProvider } from './hooks/use-products';
import CartScreen from './screens/cart';
import { getPath } from './utils/paths';
import PaymentSuccessScreen from './screens/payment-success';
import { CurrencyProvider } from './hooks/use-currency';

const Wrapper = styled.div`
  composes: ${mixins.fontFamilySans};
  color: #1b1b1b;
`;

function App() {
  return (
    <CurrencyProvider>
      <ProductsProvider>
        <Wrapper>
          <Router>
            <ProductScreen path={getPath.buy()} />
            <CartScreen path={getPath.cart()} />
            <PaymentSuccessScreen path={getPath.paymentSuccess()} />
          </Router>
        </Wrapper>
      </ProductsProvider>
    </CurrencyProvider>
  );
}

export default App;
