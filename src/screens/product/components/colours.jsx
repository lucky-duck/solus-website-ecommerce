import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Flex from '../../../components/ui-kit/flex';
import mixins from '../../../styles/mixins';
import Colour from '../../../components/colour-circle';

const StyledColour = styled(Colour)`
  margin-right: 13px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = styled(Flex)`
  margin-bottom: 15px;
`;

const StyledItem = styled(Flex)`
  padding: 20px 0;
  border-bottom: 1px solid #dadada;

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    border-bottom: none;

    &:last-of-type {
      border-bottom: 1px solid #dadada;
    }
  }
`;

const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;

  @media (max-width: 767px) {
    max-width: 200px;
  }

  @media (max-width: 374px) {
    max-width: 150px;
  }
`;

const Quantity = styled.span`
  @import '../../../styles/colors.scss';

  display: inline-block;
  color: $colorPaleGrey;
  min-width: 23px;
`;

function Item({ title, quantity }) {
  return (
    <StyledItem jcsb aic>
      <ItemTitle>
        <Quantity>{quantity}x</Quantity> {title}
      </ItemTitle>
      <Flex aic>
        <StyledColour active />
        <StyledColour white />
      </Flex>
    </StyledItem>
  );
}

const HeaderText = styled.div`
  @import '../../../styles/colors.scss';

  composes: ${mixins.fontFamilySansAlt};
  color: $colorPaleGrey;
  font-size: 13px;
`;

const HeaderTextNumber = styled.span`
  color: #1b1b1b;
  font-weight: 600;
`;

function Colours() {
  return (
    <Section>
      <Header aic jcsb>
        <Section.Title>Select Colour</Section.Title>
        <HeaderText>
          For the <HeaderTextNumber>2</HeaderTextNumber> selected radiators
        </HeaderText>
      </Header>
      <div>
        <Item quantity={1} title={'SOLUS+ M1 200W Heater'} />
        <Item quantity={1} title={'SOLUS+ M1 200W Heater'} />
      </div>
    </Section>
  );
}

export default Colours;
