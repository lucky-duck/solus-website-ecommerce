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

export const inputMixins = css`
  .inputReset {
    width: 100%;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: transparent;
  }

  .inputReset:focus {
    @import './colors.scss';
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
    font-size: 14px;
    padding: 0 14px;
    min-height: 40px;
  }

  .inputCommon::placeholder {
    color: #949494;
  }
`;

export default mixins;
