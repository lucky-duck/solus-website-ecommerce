import { css } from 'astroturf';

const mixins = css`
  .fontFamilySans {
    font-family: FuturaPTMedium, 'Futura PT', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  .fontFamilySansAlt {
    font-family: FuturaPTBook, 'Futura PT', 'San Francisco Display',
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    letter-spacing: -0.02em;
  }

  .hoverDefault {
    transition: opacity 0.35s ease-out;
  }

  .hoverDefault:hover {
    opacity: 0.8;
    transition: none;
  }

  .hoverDefault:active {
    opacity: 0.6;
  }

  .buttonReset {
    border: none;
    background-color: transparent;
    border-radius: 0;
    -webkit-appearance: none;
    text-decoration: none;
    user-select: none;
  }

  .buttonReset:focus {
    outline: none;
  }
`;

export default mixins;
