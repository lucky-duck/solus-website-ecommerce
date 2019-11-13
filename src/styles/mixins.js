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

export const inputMixins = css`
  @import './colors.scss';

  .inputReset {
    width: 100%;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: transparent;
  }

  .inputReset:focus {
    outline: none;
    border-color: $colorLink;
  }

  .inputReset::-ms-clear {
    display: none;
  }

  .inputCommon {
    display: block;
    border: 1px solid #949494;
    background-color: #fff;
    border-radius: 3px;
    padding: 0 20px;
    min-height: 50px;
    font-size: 18px;
  }

  .inputCommon::placeholder {
    color: #949494;
  }
`;

export default mixins;
