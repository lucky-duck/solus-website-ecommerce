import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'astroturf';

import scrollLocker from '../utils/scroll-locker';
import ButtonClose from './button-close';

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.5);
  will-change: opacity;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 30px;
  text-align: center;

  &:before {
    content: '';
    width: 0;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
  }
`;

const Inner = styled.div`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
`;

const StyledModal = styled(motion.div)`
  position: relative;
  padding: 80px 50px 50px;
  max-width: 900px;
  background-color: #fff;
  box-shadow: 0 3px 20px rgba(51, 51, 51, 0.15);
  will-change: transform;

  @media (max-width: 991px) {
    padding: 50px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
  }
`;

const StyledButtonClose = styled(ButtonClose)`
  position: absolute;
  top: 27px;
  right: 33px;
`;

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalAnimationVariants = {
  visible: { y: 0 },
  hidden: { y: -35 },
  initial: { y: 15 },
};

function Modal({ className, ...props }) {
  useEffect(() => {
    props.shown ? scrollLocker.lock() : scrollLocker.unlock();

    return () => {
      scrollLocker.unlock();
    };
  }, [props.shown]);

  return (
    <AnimatePresence>
      {props.shown && (
        <Wrapper
          key={'wrapper'}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          variants={animationVariants}
          transition={{ ease: 'easeOut', duration: 0.35 }}
        >
          <Inner>
            <StyledModal
              className={className}
              positionTransition
              key={'modal'}
              initial={'initial'}
              variants={modalAnimationVariants}
              transition={{ ease: 'easeOut', duration: 0.45 }}
            >
              <StyledButtonClose color={'black'} onClick={props.onClose} />
              {props.children}
            </StyledModal>
          </Inner>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

Modal.propTypes = {
  shown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
