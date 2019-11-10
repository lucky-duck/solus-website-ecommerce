import React from 'react';
import styled from 'astroturf';

import image from '../../images/heater-black-small.jpg';
import Text from '../ui-kit/text';
import Flex from '../ui-kit/flex';
import Colour from '../colour-circle';

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #c5c5c5;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border-radius: 4px;
  background: linear-gradient(
    226.12deg,
    rgba(255, 255, 255, 0.25) -23.1%,
    rgba(214, 223, 239, 0.25) 35.55%,
    rgba(123, 146, 179, 0.25) 111.64%
  );
  margin-right: 14px;
`;

const Image = styled.img`
  width: 18px;
  height: auto;
`;

const Content = styled.div`
  width: 120px;
`;

const Title = styled(Text)`
  margin-bottom: 4px;
`;

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

  &:last-of-type {
    margin-right: 0;
  }
`;

function Item({ title, description }) {
  return (
    <StyledItem>
      <Flex aic>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <Content>
          <Title bold>{title}</Title>
          <Text small pale>
            {description}
          </Text>
        </Content>
      </Flex>
      <div>
        <Price big>£250.00</Price>
        <ColourContainer>
          <StyledColour small />
          <Text extraSmall pale>
            White
          </Text>
        </ColourContainer>
      </div>
    </StyledItem>
  );
}

export default Item;
