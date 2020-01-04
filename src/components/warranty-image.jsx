import React from 'react';
import styled from 'astroturf';

import imageWarranty from '../images/warranty.jpg';

const Image = styled.img`
  border-radius: 5px;
  display: block;
  max-width: 100%;
`;

function WarrantyImage(props) {
  return <Image src={imageWarranty} {...props} />;
}

export default WarrantyImage;
