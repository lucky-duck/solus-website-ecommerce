import React from 'react';
import styled from 'astroturf';

import Text from '../ui-kit/text';
import Flex from '../ui-kit/flex';
import Colour from '../colour-circle';
import Link from '../ui-kit/link';
import ProductPreview from '../product-preview';
import { COLORS } from '../../constants';

const StyledItem = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 27px;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Content = styled.div`
  width: 120px;
`;

const Title = styled(Text)`
  margin-bottom: 4px;
`;

const Quantity = styled.div``;

const Price = styled(Text)`
  margin-bottom: 20px;
`;

const ColourContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledColour = styled(Colour)`
  margin-right: 5px;
`;

// const Separator = styled.div`
//   @import '../../styles/colors.scss';
//
//   width: 1px;
//   height: 11px;
//   background-color: $colorPaleGrey;
//   margin: 0 10px;
// `;

function Item({ title, description, quantity, color, onRemove }) {
  return (
    <StyledItem>
      <Row>
        <Flex aic>
          <ProductPreview />
          <Content>
            <Title bold>
              <Text as={'span'} pale>
                {quantity}x
              </Text>{' '}
              {title}
            </Title>
            <Text small pale>
              {description}
            </Text>
          </Content>
        </Flex>
        <div>
          <Price big>£250.00</Price>
          <ColourContainer>
            <StyledColour small white={color === COLORS.WHITE} />
            <Text extraSmall pale>
              White
            </Text>
          </ColourContainer>
        </div>
      </Row>
      <Flex aic>
        {/*<Link extraSmall>Edit</Link>*/}
        {/*<Separator />*/}
        <Link extraSmall pale onClick={onRemove}>
          Remove
        </Link>
      </Flex>
    </StyledItem>
  );
}

export default Item;
