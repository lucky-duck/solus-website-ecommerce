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

const StyledItem = styled(Flex)`
  padding: 20px 0;
  border-bottom: 1px solid #dadada;

  &:last-of-type {
    border-bottom: none;
  }
`;

const ItemTitle = styled.div`
  composes: ${mixins.fontFamilySansAlt};
  font-weight: 500;
  font-size: 18px;
`;

const Quantity = styled.span`
  display: inline-block;
  color: #949494;
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
  composes: ${mixins.fontFamilySansAlt};
  color: #949494;
  font-size: 13px;
`;

const HeaderTextNumber = styled.span`
  color: #1b1b1b;
  font-weight: 600;
`;

function Colours() {
  return (
    <Section>
      <Flex aic jcsb>
        <Section.Title>Select Colour</Section.Title>
        <HeaderText>
          For the <HeaderTextNumber>2</HeaderTextNumber> selected radiators
        </HeaderText>
      </Flex>
      <Item quantity={1} title={'SOLUS+ M1 200W Heater'} />
      <Item quantity={1} title={'SOLUS+ M1 200W Heater'} />
    </Section>
  );
}

export default Colours;
