import styled from 'astroturf';

import Text from './text';

const Link = styled(Text.withComponent('a'))`
  @import '../../styles/colors.scss';

  color: $colorLink;
  text-decoration: none;
`;

export default Link;
