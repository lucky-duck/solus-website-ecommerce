import React from 'react';
import styled from 'astroturf';

const StyledContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
