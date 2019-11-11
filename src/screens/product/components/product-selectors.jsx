import React from 'react';
import styled from 'astroturf';
import InputSelect from '../../../components/controls/input-select';
import mixins from '../../../styles/mixins';
import Section from './section';
import Link from '../../../components/ui-kit/link';
import Text from '../../../components/ui-kit/text';
import { useProducts } from '../../../hooks/products';

const OPTIONS = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
  {
    value: 10,
    label: 10,
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

  @media (max-width: 767px) {
    margin-bottom: 11px;
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

  @media (max-width: 374px) {
    padding-left: 12px;
    min-width: 80px;
  }
`;

function Item({ id, title, price, onChange, ...rest }) {
  return (
    <StyledItem {...rest}>
      <div style={{ width: '40%' }}>
        <ItemTitle dangerouslySetInnerHTML={{ __html: title }} />
        <ItemDescription>40x45x80 cm</ItemDescription>
      </div>
      <ItemRight>
        <InputSelect
          name={`product_${id}`}
          type={'select'}
          options={OPTIONS}
          active={rest.active}
          onChange={onChange}
        />
        <ItemPrice pale big active={rest.active}>
          £{price.toFixed(2)}
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

  function handleChange(e, id) {
    setProductQuantity(id, Number(e.currentTarget.value));
  }

  return (
    <Section>
      <Header>
        <Section.Title>Select your SOLUS+</Section.Title>
        <Link href={'/'} extraSmall>
          How many heaters do I need?
        </Link>
      </Header>
      <StyledProductSelectors>
        {items.map((item, index) => {
          const isSelected =
            selectedProducts.filter((v) => v.id === item.id).length > 0;
          return (
            <Item
              key={index}
              id={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              active={isSelected}
              onChange={(e) => handleChange(e, item.id)}
            />
          );
        })}
      </StyledProductSelectors>
    </Section>
  );
}

export default ProductSelectors;
