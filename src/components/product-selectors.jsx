import React from 'react';
import styled from 'astroturf';
import InputSelect from './controls/input-select';

const StyledProductSelectors = styled.div``;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #949494;
  border-radius: 4px;
  height: 86px;
  margin-bottom: 22px;
`;

const ItemTitle = styled.div`
  font-weight: 500;
  max-width: 200px;
  line-height: 1;
`;

const ItemDescription = styled.div`
  color: #949494;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.div`
  font-size: 22px;
  color: #949494;
  margin-left: 25px;
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
      <Item title={'SOLUS+ M1<br/> 200W Heater'} price={210} />
      <Item title={'SOLUS+ M1<br/> 200W Heater'} price={210} />
      <Item title={'SOLUS+ M1<br/> 200W Heater'} price={210} />
      <Item title={'SOLUS+ M1<br/> 200W Heater'} price={210} />
    </StyledProductSelectors>
  );
}

export default ProductSelectors;
