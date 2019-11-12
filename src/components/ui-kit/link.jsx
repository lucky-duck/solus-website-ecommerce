import styled from 'astroturf';

import Text from './text';
import mixins from '../../styles/mixins';

const Link = styled(Text.withComponent('a'))`
  @import '../../styles/colors.scss';
  composes: ${mixins.hoverDefault};

  color: $colorLink;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
`;

export default Link;
