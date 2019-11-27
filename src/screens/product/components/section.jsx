import React from 'react';
import styled from 'astroturf';

const StyledSection = styled.section`
  margin-bottom: 38px;
  border-bottom: 2px solid #949494;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  &.noBorder {
    border-bottom: none;
  }
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
