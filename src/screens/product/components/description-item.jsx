import React, { useState } from 'react';
import styled from 'astroturf';
import { motion } from 'framer-motion';
import { ReactComponent as IconChevronRight } from '../../../images/svg/icon-chevron-right.svg';

import Text from '../../../components/ui-kit/text';
import mixins from '../../../styles/mixins';

const DescriptionSection = styled(Text)`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DescriptionSectionTitle = styled(Text)`
  font-size: 20px;
  margin-bottom: 5px;
`;

const TextContainer = styled(motion.div)``;

const StyledText = styled(Text)`
  line-height: 1.5;
`;

const Button = styled.div`
  composes: ${mixins.hoverDefault};

  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
`;

const ButtonText = styled.span`
  font-size: 16px;
  color: #949494;
  transition: opacity 0.55s ease-out;
  will-change: opacity;

  &.hidden {
    opacity: 0;
  }
`;

const StyledChevronRight = styled(IconChevronRight)`
  @import '../../../styles/colors.scss';

  margin-left: 10px;
  fill: $colorPrimary;
  width: 6px;
  height: 10px;
  transition: transform 0.35s ease-out;

  &.rotated {
    transform: rotate(90deg);
  }
`;

const animationVariants = {
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { ease: 'easeOut', duration: 0.45 },
  },
  hidden: {
    opacity: 0,
    height: 0,
    transition: { ease: 'easeOut', duration: 0.3 },
  },
};

function DescriptionItem({ title, text }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleClick() {
    setCollapsed((state) => !state);
  }

  return (
    <DescriptionSection>
      <Header>
        <DescriptionSectionTitle bold>{title}</DescriptionSectionTitle>
        <Button onClick={handleClick}>
          <ButtonText hidden={collapsed}>Show</ButtonText>{' '}
          <StyledChevronRight rotated={collapsed} />
        </Button>
      </Header>
      <TextContainer
        animate={collapsed ? 'visible' : 'hidden'}
        initial={'hidden'}
        variants={animationVariants}
      >
        <StyledText dangerouslySetInnerHTML={{ __html: text }} pale />
      </TextContainer>
    </DescriptionSection>
  );
}

export default DescriptionItem;
