import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import { useProducts } from '../../../hooks/use-products';
import DescriptionItem from './description-item';

const StyledSection = styled(Section)`
  padding-bottom: 27px;
`;

const DescriptionTitle = styled(Section.Title)`
  margin-bottom: 25px;
`;

function Description() {
  const { allProducts } = useProducts();

  return (
    <StyledSection>
      <DescriptionTitle>Description</DescriptionTitle>
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
    </StyledSection>
  );
}

export default Description;
