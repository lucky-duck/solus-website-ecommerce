import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';
import { useProducts } from '../../../hooks/use-products';
import mixins from '../../../styles/mixins';

const StyledSection = styled(Section)`
  border-bottom: 1px solid #dadada;
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

const AccentText = styled.div`
  composes: ${mixins.fontFamilySansAlt};
  font-family: FuturaPTBook, 'Futura PT', 'San Francisco Display', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
      <DescriptionSection>
        <Text small accent>
          <AccentText>FREE SHIPPING WORLDWIDE</AccentText>
        </Text>
      </DescriptionSection>
    </StyledSection>
  );
}

export default Description;
