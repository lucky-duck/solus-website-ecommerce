import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Swiper from 'swiper/dist/js/swiper';

import { Box } from './UIKit/system';

const Container = styled(Box)`
  position: relative;

  .swiper-notification {
    visibility: hidden;
  }
`;

const StyledTrack = styled(Box)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  will-change: transform;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`;

function Track({ children }) {
  return useMemo(
    () => <StyledTrack className={'swiper-wrapper'}>{children}</StyledTrack>,
    [children]
  );
}

function ReactSwiper({ className, children, options = {}, onChange, ...rest }) {
  const containerNode = React.createRef();
  const swiperInstance = React.createRef();

  useEffect(() => {
    initSwiper();
  }, []);

  function initSwiper() {
    swiperInstance.current = new Swiper(containerNode.current, {
      init: false,
      ...options,
    });
    swiperInstance.current.on('init', () => {
      onChange && onChange(swiperInstance.current.realIndex);
    });
    swiperInstance.current.init();
    swiperInstance.current.on('slideChange', () => {
      onChange && onChange(swiperInstance.current.realIndex);
    });
  }

  return (
    <Container className={className} ref={containerNode} {...rest}>
      <Track>{children}</Track>
    </Container>
  );
}

const StyledItem = styled(Box)`
  height: 100%;
  will-change: transform;
  flex-shrink: 0;
`;

const Item = ({ children }) => {
  return useMemo(
    () => <StyledItem className={'swiper-slide'}>{children}</StyledItem>,
    [children]
  );
};

ReactSwiper.Item = Item;

export default ReactSwiper;
