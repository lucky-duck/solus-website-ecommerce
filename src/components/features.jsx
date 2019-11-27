import React from 'react';
import styled from 'astroturf';

import { ReactComponent as IconPlug } from '../images/svg/icon-plug.svg';
import { ReactComponent as IconSmartHome } from '../images/svg/icon-smart-home.svg';
import { ReactComponent as IconTools } from '../images/svg/icon-tools.svg';
import { ReactComponent as IconSeed } from '../images/svg/icon-seed.svg';

const StyledFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 410px;
  margin-left: auto;
  margin-right: auto;

  &.isMobile {
    display: none;
  }

  @media (max-width: 991px) {
    display: block;
  }

  @media (max-width: 767px) {
    display: none;

    &.isMobile {
      display: block;
    }
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    width: auto;
    margin-bottom: 32px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const ItemIconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 45px;
    margin-bottom: 12px;
  }
`;

const ItemContent = styled.div`
  @media (max-width: 767px) {
    max-width: 200px;
  }
`;

const ItemTitle = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.12em;
`;

// const StyledItemText = styled(Text)`
//   line-height: 1.5;
// `;

function Item({ title, text, icon: IconComponent }) {
  return (
    <StyledItem>
      <ItemIconContainer>
        <IconComponent />
      </ItemIconContainer>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {/*<StyledItemText small pale>*/}
        {/*  {text}*/}
        {/*</StyledItemText>*/}
      </ItemContent>
    </StyledItem>
  );
}

function Features({ isMobile }) {
  return (
    <StyledFeatures isMobile={isMobile}>
      <Item
        title={'Plug and play'}
        text={'Zero installation costs.'}
        icon={IconPlug}
      />
      <Item
        title={'Maintenance free'}
        text={
          'Our heaters are maintenance free and their function is constantly being upgraded through software. A heater that improves over time.'
        }
        icon={IconTools}
      />
      <Item
        title={'Smart home'}
        text={
          'Control your heating from your phone. Reduce heating costs by up to 31% with smart home features.'
        }
        icon={IconSmartHome}
      />
      <Item
        title={'Cost efficient'}
        text={'Up to 30% more cost efficient than convection electric heaters.'}
        icon={IconSeed}
      />
    </StyledFeatures>
  );
}

export default Features;
