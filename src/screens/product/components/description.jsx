import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';

const StyledSection = styled(Section)`
  border-bottom: 1px solid #dadada;
  padding-bottom: 27px;
`;

const DescriptionTitle = styled(Section.Title)`
  margin-bottom: 15px;
`;

const StyledText = styled(Text)`
  margin-bottom: 17px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

function Description() {
  return (
    <StyledSection>
      <DescriptionTitle>Description</DescriptionTitle>
      <StyledText small pale>
        SOLUS+ M1 Heater is Technical specification line
      </StyledText>
      <StyledText small pale>
        Power is 200W
      </StyledText>
      <StyledText small pale>
        Space Grey Color
      </StyledText>
    </StyledSection>
  );
}

export default Description;
