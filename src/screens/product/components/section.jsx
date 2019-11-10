import React from 'react';
import styled from 'astroturf';

import Text from '../../../components/ui-kit/text';

const StyledSection = styled.section`
  margin-bottom: 38px;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

function SectionTitle(props) {
  return <Text as={'h2'} bold big {...props} />;
}

Section.Title = SectionTitle;

export default Section;
