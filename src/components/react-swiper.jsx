import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'astroturf';
import Swiper from 'swiper/dist/js/swiper';

import { ReactComponent as IconChevronRight } from '../images/svg/icon-chevron-right.svg';
import mixins from '../styles/mixins';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .swiper-notification {
    visibility: hidden;
  }
`;

const StyledTrack = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  will-change: transform;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`;

const NavButtonIcon = styled(IconChevronRight)`
  width: 8px;
  height: 12px;
  fill: #3a3a3a;
  right: 0;
`;

const StyledNavButton = styled.div`
  composes: ${mixins.hoverDefault};

  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  &.prev {
    left: 10px;
    right: auto;
    transform: translateY(-50%) scaleX(-1);
  }
`;

const NavButton = React.forwardRef((props, ref) => {
  return (
    <StyledNavButton {...props} ref={ref}>
      <NavButtonIcon />
    </StyledNavButton>
  );
});

function Track({ children }) {
  return useMemo(
    () => <StyledTrack className={'swiper-wrapper'}>{children}</StyledTrack>,
    [children]
  );
}

function ReactSwiper({ className, children, options = {}, onChange, ...rest }) {
  const containerNode = useRef(null);
  const swiperInstance = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    initSwiper();
    // eslint-disable-next-line
  }, []);

  function initSwiper() {
    swiperInstance.current = new Swiper(containerNode.current, {
      init: false,
      navigation: {
        nextEl: nextButtonRef.current,
        prevEl: prevButtonRef.current,
      },
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
      <NavButton prev ref={prevButtonRef} />
      <NavButton ref={nextButtonRef} />
    </Container>
  );
}

const StyledItem = styled.div`
  width: 100%;
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
