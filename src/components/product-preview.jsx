import React from 'react';
import styled from 'astroturf';
import imageHeaterBlack from '../images/heater-black-small.jpg';
import imageHeaterWhite from '../images/heater-white-small.jpg';

const StyledProductPreview = styled.div`
  position: relative;

  width: 75px;
  height: 75px;
  border-radius: 4px;
  margin-right: 14px;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    226.12deg,
    rgba(255, 255, 255, 0.25) -23.1%,
    rgba(214, 223, 239, 0.25) 35.55%,
    rgba(123, 146, 179, 0.25) 111.64%
  );
`;

const Image = styled.img`
  width: 18px;
  height: auto;
`;

function ProductPreview({ white }) {
  return (
    <StyledProductPreview>
      <Inner>
        <Image src={white ? imageHeaterWhite : imageHeaterBlack} />
      </Inner>
    </StyledProductPreview>
  );
}

export default ProductPreview;
