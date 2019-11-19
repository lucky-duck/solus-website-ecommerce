import styled from 'astroturf';

const Screen = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export default Screen;
