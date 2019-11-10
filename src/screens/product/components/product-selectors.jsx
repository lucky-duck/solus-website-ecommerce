import React from 'react';
import styled from 'astroturf';
import InputSelect from '../../../components/controls/input-select';
import mixins from '../../../styles/mixins';
import Section from './section';
import Link from '../../../components/ui-kit/link';
import Text from '../../../components/ui-kit/text';

const StyledProductSelectors = styled.div``;

const Header = styled.header`
  margin-bottom: 17px;
`;

const StyledItem = styled.div`
  @import '../../../styles/colors.scss';

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border: 1px solid $colorPaleGrey;
  border-radius: 4px;
  height: 86px;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.active {
    border-color: $colorPrimary;
  }
`;

const ItemTitle = styled.div`
  font-weight: 500;
  max-width: 200px;
  line-height: 1;
  margin-bottom: 3px;
`;

const ItemDescription = styled.div`
  @import '../../../styles/colors.scss';

  composes: ${mixins.fontFamilySansAlt};
  color: $colorPaleGrey;
  font-size: 14px;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const ItemPrice = styled(Text)`
  @import '../../../styles/colors.scss';

  text-align: right;
  padding-left: 25px;
  min-width: 100px;

  &.active {
    color: $colorBlack;
  }
`;

function Item({ title, price, ...rest }) {
  return (
    <StyledItem {...rest}>
      <div style={{ width: '40%' }}>
        <ItemTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ItemDescription>40x45x80 cm</ItemDescription>
      </div>
      <ItemRight>
        <InputSelect
          type={'select'}
          options={[
            {
              value: '0',
              label: '0',
            },
            {
              value: '1',
              label: '1',
            },
            {
              value: '2',
              label: '2',
            },
            {
              value: '3',
              label: '3',
            },
          ]}
          active={rest.active}
        />
        <ItemPrice pale big active={rest.active}>
          £{price.toFixed(2)}
        </ItemPrice>
      </ItemRight>
    </StyledItem>
  );
}

function ProductSelectors() {
  return (
    <Section>
      <Header>
        <Section.Title>Select your SOLUS+</Section.Title>
        <Link href={'/'} extraSmall>
          How many heaters do I need?
        </Link>
      </Header>
      <StyledProductSelectors>
        <Item active title={'SOLUS+ M1<br/> 200W Heater'} price={250} />
        <Item title={'SOLUS+ M2<br/> 400W Heater'} price={350} />
        <Item title={'Starter Kit M1<br/> 2xM1 200W Heater'} price={450} />
        <Item title={'Starter Kit M2<br/> 2xM2 400W Heater'} price={650} />
      </StyledProductSelectors>
    </Section>
  );
}

export default ProductSelectors;
