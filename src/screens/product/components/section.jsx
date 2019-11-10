import React from 'react';
import styled from 'astroturf';

const StyledSection = styled.section`
  margin-bottom: 38px;
`;

function Section(props) {
  return <StyledSection {...props} />;
}

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

Section.Title = SectionTitle;

export default Section;
