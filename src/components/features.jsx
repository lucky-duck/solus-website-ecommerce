import React from 'react';
import styled from 'astroturf';

import { ReactComponent as IconPlug } from '../images/svg/icon-plug.svg';
import { ReactComponent as IconSmartHome } from '../images/svg/icon-smart-home.svg';
import { ReactComponent as IconTools } from '../images/svg/icon-tools.svg';
import { ReactComponent as IconSeed } from '../images/svg/icon-seed.svg';
import Text from './ui-kit/text';

const StyledFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    display: block;
  }
`;

const StyledItem = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    width: auto;
    margin-bottom: 32px;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const ItemIconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 45px;
    justify-content: flex-start;
  }
`;

const ItemContent = styled.div``;

const ItemTitle = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 5px;
  letter-spacing: 0.12em;
`;

function Item({ title, text, icon: IconComponent }) {
  return (
    <StyledItem>
      <ItemIconContainer>
        <IconComponent />
      </ItemIconContainer>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <Text small pale>
          {text}
        </Text>
      </ItemContent>
    </StyledItem>
  );
}

function Features() {
  return (
    <StyledFeatures>
      <Item
        title={'Plug and play'}
        text={'Zero installation costs.'}
        icon={IconPlug}
      />
      <Item
        title={'Maintenance free'}
        text={'Technology requires no maintenance'}
        icon={IconTools}
      />
      <Item
        title={'Smart home'}
        text={'Control Solus+ from your phone. '}
        icon={IconSmartHome}
      />
      <Item
        title={'Cost efficient'}
        text={'Up to 30% more efficient than conventional radiators.'}
        icon={IconSeed}
      />
    </StyledFeatures>
  );
}

export default Features;
