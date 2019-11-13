import { css } from 'astroturf';

const inputMixins = css`
  .inputReset {
    width: 100%;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: transparent;
  }

  .inputReset:focus {
    outline: none;
    border-color: #2199f0;
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

export default inputMixins;
