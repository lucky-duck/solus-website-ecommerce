import React from 'react';
import styled from 'astroturf';

import Section from './section';
import { useProducts } from '../../../hooks/use-products';
import DescriptionItem from './description-item';
import FreeShippingMsg from '../../../components/free-shipping-msg';

const StyledSection = styled(Section)`
  padding-bottom: 27px;
`;

const DescriptionTitle = styled(Section.Title)`
  margin-bottom: 25px;
`;

const Items = styled.div``;

const AccentTextContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

function Description() {
  const { allProducts } = useProducts();

  return (
    <StyledSection>
      <DescriptionTitle>Description</DescriptionTitle>
      <Items>
        {allProducts
          .filter((v) => v.descriptionDetailed)
          .map((v) => {
            return (
              <DescriptionItem
                key={v.id}
                title={v.descriptionDetailedTitle}
                text={v.descriptionDetailed}
              />
            );
          })}
      </Items>
      <AccentTextContainer>
        <FreeShippingMsg />
      </AccentTextContainer>
    </StyledSection>
  );
}

export default Description;
