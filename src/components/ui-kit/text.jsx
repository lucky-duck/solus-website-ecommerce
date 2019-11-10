import styled from 'astroturf';

import mixins from '../../styles/mixins';

const Text = styled.div`
  composes: ${mixins.fontFamilySansAlt};
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
    color: #949494;
  }

  &.bold {
    font-weight: 500;
  }
`;

export default Text;
