import React from 'react';
import styled from 'astroturf';
import InputSelect from './controls/input-select';
import mixins from '../styles/mixins';

console.log('mixins', mixins);

const StyledProductSelectors = styled.div``;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border: 1px solid #949494;
  border-radius: 4px;
  height: 86px;
  margin-bottom: 22px;
`;

const ItemTitle = styled.div`
  font-weight: 500;
  max-width: 200px;
  line-height: 1;
  margin-bottom: 3px;
`;

const ItemDescription = styled.div`
  composes: ${mixins.fontFamilySansAlt};
  color: #949494;
  font-size: 14px;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.div`
  text-align: right;
  font-size: 22px;
  color: #949494;
  padding-left: 25px;
  min-width: 100px;
`;

function Item({ title, price }) {
  return (
    <StyledItem>
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
        />
        <ItemPrice>{price}£</ItemPrice>
      </ItemRight>
    </StyledItem>
  );
}

function ProductSelectors() {
  return (
    <StyledProductSelectors>
      <Item title={'SOLUS+ M1<br/> 200W Heater'} price={250} />
      <Item title={'SOLUS+ M2<br/> 400W Heater'} price={350} />
      <Item title={'Starter Kit M1<br/> 2xM1 200W Heater'} price={450} />
      <Item title={'Starter Kit M2<br/> 2xM2 400W Heater'} price={650} />
    </StyledProductSelectors>
  );
}

export default ProductSelectors;
