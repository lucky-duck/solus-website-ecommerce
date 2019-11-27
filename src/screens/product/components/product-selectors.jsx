import React, { useMemo } from 'react';
import styled from 'astroturf';

import InputSelect from '../../../components/controls/input-select';
import mixins from '../../../styles/mixins';
import Section from './section';
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
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 13,
    label: '13',
  },
  {
    value: 14,
    label: '14',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 17,
    label: '17',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 19,
    label: '19',
  },
  {
    value: 20,
    label: '20',
  },
];

const StyledProductSelectors = styled.div``;

const Header = styled.header`
  margin-bottom: 20px;
`;

const StyledItem = styled.div`
  @import '../../../styles/colors.scss';

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 15px;
  border: 2px solid #d6dfef;
  border-radius: 4px;
  min-height: 86px;
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
  font-size: 24px;
`;

const ItemDescription = styled.div`
  @import '../../../styles/colors.scss';

  composes: ${mixins.fontFamilySansAlt};
  color: $colorPaleGrey;
  font-size: 17px;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const ItemPrice = styled(Text)`
  text-align: right;
  padding-left: 25px;
  min-width: 100px;
  font-size: 26px;

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
          altStyling
        />
        <ItemPrice bold>
          {formatCurrency(price)}
        </ItemPrice>
      </ItemRight>
    </StyledItem>
  );
}

function ProductSelectors() {
  const {
    allProducts,
    cartSelectedProducts,
    setProductQuantity,
  } = useProducts();
  const itemsEnhanced = useMemo(() => {
    return cartSelectedProducts.reduce((acc, curr) => {
      const foundIndex = acc.findIndex((v) => v.productId === curr.productId);
      if (foundIndex > -1) {
        acc[foundIndex] = {
          ...acc[foundIndex],
          quantity: acc[foundIndex].quantity + curr.quantity,
        };
      } else {
        return [...acc, curr];
      }
      return acc;
    }, []);
  }, [cartSelectedProducts]);

  return (
    <Section noBorder>
      <Header>
        <Section.Title>Choose product.</Section.Title>
        {/*<Link href={'/'} extraSmall>*/}
        {/*  How many heaters do I need?*/}
        {/*</Link>*/}
      </Header>
      <StyledProductSelectors>
        {allProducts.map((item, index) => {
          const selectedItem = itemsEnhanced.filter(
            (v) => v.productId === item.id
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
