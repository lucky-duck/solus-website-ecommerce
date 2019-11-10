import React from 'react';
import styled from 'astroturf';
import Item from './item';

const StyledCart = styled.div``;

function Cart() {
  return (
    <StyledCart>
      <Item title={'SOLUS+ M1 200W Heater'} description={'40x45x80 cm'} />
    </StyledCart>
  );
}

export default Cart;
