import React from 'react';
import styled from 'astroturf';

const StyledFlex = styled.div`
  display: flex;

  &.fdc {
    flex-direction: column;
  }

  &.aic {
    align-items: center;
  }

  &.posr {
    position: relative;
  }

  &.jcsb {
    justify-content: space-between;
  }
`;

function Flex(props) {
  return <StyledFlex {...props} />;
}

export default Flex;
