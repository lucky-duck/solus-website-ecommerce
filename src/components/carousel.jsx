import React from 'react';
import styled from 'astroturf';

import ReactSwiper from './react-swiper';

const SWIPER_OPTIONS = {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  // autoplay: {
  //   speed: 5000,
  // },
  // breakpoints: {
  //   [BREAKPOINT_MD]: {
  //     spaceBetween: 40,
  //   },
  //   [BREAKPOINT_SM]: {
  //     spaceBetween: OFFSET_SIDE_SM,
  //     slidesPerView: 1,
  //   },
  // },
};

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function Carousel({ items }) {
  return (
    <ReactSwiper options={SWIPER_OPTIONS}>
      {items.map((item, index) => {
        return (
          <ReactSwiper.Item key={index}>
            <Image src={item.image} />
            {/*<ProductPreview />*/}
          </ReactSwiper.Item>
        );
      })}
    </ReactSwiper>
  );
}

export default Carousel;
