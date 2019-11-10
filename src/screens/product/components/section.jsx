import React from 'react';
import styled from 'astroturf';

import mixins from '../../../styles/mixins';

const StyledSection = styled.section`
  margin-bottom: 38px;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

const SectionTitle = styled.h2`
  composes: ${mixins.fontFamilySansAlt};
  font-size: 22px;
  font-weight: 500;
`;

Section.Title = SectionTitle;

export default Section;
