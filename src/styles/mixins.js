import { css } from 'astroturf';

const mixins = css`
  .fontFamilySans {
    font-family: 'Futura PT', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  .fontFamilySansAlt {
    font-family: 'San Francisco Display', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: -0.02em;
  }

  .hoverDefault {
    transition: opacity 0.35s ease-out;

    &:hover {
      opacity: 0.8;
      transition: none;
    }

    &:active {
      opacity: 0.6;
    }
  }
`;

export default mixins;
