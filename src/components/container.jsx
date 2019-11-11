import React from 'react';
import styled from 'astroturf';

const StyledContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
