import React from 'react';
import styled from 'astroturf';

const StyledSection = styled.section`
  margin-bottom: 50px;
  border-bottom: 2px solid #949494;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  &.noBorder {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

function Section(props) {
  return <StyledSection {...props} />;
}

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
`;

Section.Title = SectionTitle;

export default Section;
