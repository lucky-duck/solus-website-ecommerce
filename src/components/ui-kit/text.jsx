import styled from 'astroturf';

import mixins from '../../styles/mixins';

const Text = styled.div`
  @import '../../styles/colors.scss';
  composes: ${mixins.fontFamilySansAlt};
  letter-spacing: -0.02em;

  font-size: 16px;

  &.small {
    font-size: 14px;
  }

  &.extraSmall {
    font-size: 13px;
  }

  &.big {
    font-size: 22px;
  }

  &.pale {
    color: $colorPaleGrey;
  }

  &.bold {
    font-weight: 500;
  }

  &.danger {
    color: $colorDanger;
  }

  @media (max-width: 767px) {
    &.big {
      font-size: 20px;
    }
  }

  @media (max-width: 374px) {
    &.big {
      font-size: 18px;
    }
  }
`;

export default Text;
