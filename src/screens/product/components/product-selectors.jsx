import React from 'react';
import styled from 'astroturf';

import InputSelect from '../../../components/controls/input-select';
import mixins from '../../../styles/mixins';
import Section from './section';
import Link from '../../../components/ui-kit/link';
import Text from '../../../components/ui-kit/text';
import { useProducts } from '../../../hooks/use-products';
import { formatCurrency } from '../../../utils/utils';

const OPTIONS = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

const StyledProductSelectors = styled.div``;

const Header = styled.header`
  margin-bottom: 30px;
`;

const StyledItem = styled.div`
  @import '../../../styles/colors.scss';

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
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

  @media (max-width: 767px) {
    margin-bottom: 11px;
  }
`;

const ItemLeft = styled.div`
  width: 50%;
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

  @media (max-width: 374px) {
    padding-left: 12px;
    min-width: 80px;
  }
`;

const StyledInputSelect = styled(InputSelect)`
  width: 50px;
  flex-shrink: 0;
`;

function Item({ id, title, description, price, quantity, onChange, ...rest }) {
  function getValue() {
    if (quantity) {
      return OPTIONS.filter((v) => v.value === quantity)[0];
    }
    return OPTIONS[0];
  }

  return (
    <StyledItem {...rest}>
      <ItemLeft>
        <ItemTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ItemDescription dangerouslySetInnerHTML={{ __html: description }} />
      </ItemLeft>
      <ItemRight>
        <StyledInputSelect
          name={`product_${id}`}
          type={'select'}
          selectedItem={getValue()}
          options={OPTIONS}
          onChange={onChange}
          placeholder={'0'}
          altArrowButton
          small
        />
        <ItemPrice pale big active={rest.active}>
          {formatCurrency(price)}
        </ItemPrice>
      </ItemRight>
    </StyledItem>
  );
}

function ProductSelectors() {
  const {
    allProducts: items,
    selectedProducts,
    setProductQuantity,
  } = useProducts();

  return (
    <Section>
      <Header>
        <Section.Title>Select your SOLUS+</Section.Title>
        {/*<Link href={'/'} extraSmall>*/}
        {/*  How many heaters do I need?*/}
        {/*</Link>*/}
      </Header>
      <StyledProductSelectors>
        {items.map((item, index) => {
          const selectedItem = selectedProducts.filter(
            (v) => v.id === item.id
          )[0];
          return (
            <Item
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              quantity={selectedItem && selectedItem.quantity}
              price={item.price}
              active={!!selectedItem}
              onChange={(value) => setProductQuantity(item.id, value)}
            />
          );
        })}
      </StyledProductSelectors>
    </Section>
  );
}

export default ProductSelectors;
