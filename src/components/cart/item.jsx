import React from 'react';
import styled from 'astroturf';

import Text from '../ui-kit/text';
import Flex from '../ui-kit/flex';
import Colour from '../colour-circle';
import Link from '../ui-kit/link';
import ProductPreview from '../product-preview';
import { COLORS } from '../../constants';
import { formatCurrency } from '../../utils/utils';

const StyledItem = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 27px;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const Content = styled.div``;

const Title = styled(Text)`
  margin-bottom: 4px;
`;

const Price = styled(Text)`
  margin-bottom: 20px;
  font-size: 26px;

  @media (max-width: 991px) {
    font-size: 22px;
  }
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

function Item({ title, description, quantity, price, color, onRemove }) {
  const isWhite = color === COLORS.WHITE;

  return (
    <StyledItem>
      <Row>
        <ItemLeft>
          <ProductPreview white={isWhite} />
          <Content>
            <Title bold>
              <Text as={'span'} pale>
                {quantity}x
              </Text>{' '}
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </Title>
            <Text
              small
              pale
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Content>
        </ItemLeft>
        <div>
          <Price bold>{formatCurrency(price * quantity)}</Price>
          <ColourContainer>
            <StyledColour small white={isWhite} />
            <Text extraSmall pale>
              {isWhite ? 'White' : 'Black'}
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
