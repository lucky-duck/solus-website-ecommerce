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
    font-size: 30px;
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

  &.accent {
    color: $colorPrimary;
  }

  @media (max-width: 767px) {
    &.big {
      font-size: 26px;
    }
  }
`;

export default Text;
