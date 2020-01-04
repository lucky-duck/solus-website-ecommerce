import React from 'react';
import styled from 'astroturf';

import Modal from './modal';
import imageWarranty from '../images/warranty.jpg';
import Button from './button';
import WarrantyImage from './warranty-image';

const StyledModal = styled(Modal)`
  position: relative;
  padding: 36px 45px 10px;

  @media (max-width: 767px) {
    padding: 50px 30px 10px;
    max-width: 100%;
  }
`;

const Header = styled.div`
  text-transform: uppercase;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 26px;

  @media (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Line = styled.div`
  background-color: #dadada;
  height: 1px;
`;

const Main = styled.div`
  display: flex;
  padding: 33px 42px 45px;
  text-align: left;

  @media (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 767px) {
    display: block;
    padding-bottom: 30px;
  }
`;

const ImageContainer = styled.div`
  flex: 0 1 auto;
  max-width: 300px;
  margin-right: 26px;

  @media (max-width: 991px) {
    max-width: 220px;
  }

  @media (max-width: 767px) {
    max-width: 300px;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

const Image = styled(WarrantyImage)`
  border-radius: 5px;
`;

const Content = styled.div`
  width: 385px;
  flex: 1;
  padding-top: 26px;

  @media (max-width: 991px) {
    width: 320px;
    padding-top: 0;
  }

  @media (max-width: 767px) {
    width: auto;
    flex: 0;
  }
`;

const ContentTitle = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const ContentText = styled.div`
  font-weight: 300;
  line-height: 1.6;
`;

const Price = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
  width: 344px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 260px;
  }
`;

const ButtonBottom = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 17px;
  text-align: center;
  margin-top: 9px;
  padding: 15px 0;

  @media (max-width: 767px) {
    padding: 10px 0 12px;
  }
`;

function ModalWarranty({ shown, onClose, onAddToCart }) {
  return (
    <StyledModal shown={shown} onClose={onClose}>
      <Header>
        <Subtitle>Exclusive offer</Subtitle>
        <Title>Add extended warranty</Title>
      </Header>
      <Line />
      <Main>
        <ImageContainer>
          <Image src={imageWarranty} />
        </ImageContainer>
        <Content>
          <ContentTitle>SOLUS+ Extended Waranty</ContentTitle>
          <ContentText>
            Buy an additional 2 year full unit exchange warranty for your SOLUS+
            unit and don’t worry about your heater for 4 years. If it stops
            working, we will send you a new one to replace it.
          </ContentText>
          <Price>£85</Price>
          <StyledButton onClick={onAddToCart}>Add to purchase</StyledButton>
        </Content>
      </Main>
      <Line />
      <ButtonBottom onClick={onClose}>No thanks, continue to cart</ButtonBottom>
    </StyledModal>
  );
}

export default ModalWarranty;
