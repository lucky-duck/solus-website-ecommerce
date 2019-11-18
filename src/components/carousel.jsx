import React from 'react';

import ReactSwiper from './react-swiper';

const SWIPER_OPTIONS = {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
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

function Carousel({ items }) {
  return (
    <ReactSwiper options={SWIPER_OPTIONS}>
      {items.map((item, index) => {
        return (
          <ReactSwiper.Item key={index}>
            {/*<ProductPreview />*/}
          </ReactSwiper.Item>
        );
      })}
    </ReactSwiper>
  );
}

export default Carousel;
