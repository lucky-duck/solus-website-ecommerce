import React from 'react';
import styled from 'astroturf';

import Section from './section';
import Text from '../../../components/ui-kit/text';

const DescriptionTitle = styled(Section.Title)`
  margin-bottom: 15px;
`;

const StyledText = styled(Text)`
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

function Description() {
  return (
    <Section>
      <DescriptionTitle>Description</DescriptionTitle>
      <StyledText small pale>
        SmallTextSOLUS+ M1 Heater is Technical specification line
      </StyledText>
      <StyledText small pale>
        Power is 200W
      </StyledText>
      <StyledText small pale>
        Space Grey Color
      </StyledText>
    </Section>
  );
}

export default Description;
