import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Flex from '../../../components/ui-kit/flex';
import mixins from '../../../styles/mixins';
import Colour from '../../../components/colour-circle';
import { useProducts } from '../../../hooks/use-products';
import { COLORS } from '../../../constants';
import Text from '../../../components/ui-kit/text';

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

const ItemTitle = styled(Text)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  max-width: 240px;

  @media (max-width: 767px) {
    max-width: 200px;
  }

  @media (max-width: 374px) {
    max-width: 150px;
  }
`;

function Item({ id, title, color, onChange }) {
  return (
    <StyledItem jcsb aic>
      <ItemTitle>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </ItemTitle>
      <Flex aic>
        <StyledColour
          active={color === COLORS.BLACK}
          onClick={() => onChange(id, COLORS.BLACK)}
        />
        <StyledColour
          white
          active={color === COLORS.WHITE}
          onClick={() => onChange(id, COLORS.WHITE)}
        />
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

const StyledFakeColours = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

function FakeColours() {
  return (
    <StyledFakeColours>
      <StyledColour active />
      <StyledColour white />
    </StyledFakeColours>
  );
}

function Colours() {
  const { selectedProducts, changeProductColor } = useProducts();

  return (
    <Section>
      <Header aic jcsb>
        <Section.Title>Select Colour</Section.Title>
        <HeaderText>
          For the <HeaderTextNumber>{selectedProducts.length}</HeaderTextNumber>{' '}
          selected items
        </HeaderText>
      </Header>
      <div>
        {selectedProducts.length > 0 ? (
          selectedProducts.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                title={item.title}
                color={item.color}
                onChange={changeProductColor}
              />
            );
          })
        ) : (
          <FakeColours />
        )}
      </div>
    </Section>
  );
}

export default Colours;
