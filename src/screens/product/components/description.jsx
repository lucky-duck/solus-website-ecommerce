import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import { useProducts } from '../../../hooks/use-products';

const StyledSection = styled(Section)`
  padding-bottom: 27px;
`;

const DescriptionTitle = styled(Section.Title)`
  margin-bottom: 25px;
`;

const DescriptionSection = styled(Text)`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DescriptionSectionTitle = styled(Text)`
  margin-bottom: 5px;
`;

const StyledText = styled(Text)`
  line-height: 1.5;
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
            <DescriptionSection key={v.id}>
              <DescriptionSectionTitle bold>{v.title}</DescriptionSectionTitle>
              <StyledText
                dangerouslySetInnerHTML={{ __html: v.descriptionDetailed }}
                pale
              />
            </DescriptionSection>
          );
        })}
    </StyledSection>
  );
}

export default Description;
