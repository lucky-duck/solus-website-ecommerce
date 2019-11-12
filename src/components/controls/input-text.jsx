import React from 'react';
import styled from 'astroturf';
import TextareaAutosize from 'react-textarea-autosize';

import { inputMixins } from '../../styles/mixins';

const StyledInputText = styled.div`
  position: relative;

  &.mb {
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Input = styled.input`
  composes: ${inputMixins.inputReset};
  composes: ${inputMixins.inputCommon};

  &.invalid {
    border-color: darkred;
  }
`;

const Textarea = styled(TextareaAutosize)`
  composes: ${inputMixins.inputReset};
  composes: ${inputMixins.inputCommon};
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: 100%;
  resize: none;
  line-height: 1.85;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  letter-spacing: -0.02em;
  font-weight: 500;
  margin-bottom: 10px;
`;

function InputText({
  className,
  name,
  id,
  invalid,
  type,
  onBlur,
  defaultValue,
  value,
  px,
  placeholder,
  minHeight,
  height,
  smallPadding,
  alignTextCenter,
  onChange,
  inputRef,
  autocomplete,
  onKeyDown,
  label,
  ...rest
}) {
  const InputComponent = type === 'textarea' ? Textarea : Input;

  return (
    <StyledInputText className={className} invalid={invalid} {...rest}>
      {label && <Label for={id}>{label}</Label>}
      <InputComponent
        height={height}
        minHeight={minHeight}
        px={px}
        id={id}
        name={name}
        type={type}
        onBlur={onBlur}
        defaultValue={defaultValue}
        value={value}
        invalid={invalid}
        placeholder={placeholder}
        smallPadding={smallPadding}
        alignTextCenter={alignTextCenter}
        onChange={onChange}
        ref={inputRef}
        autocomplete={autocomplete}
        onKeyDown={onKeyDown}
      />
    </StyledInputText>
  );
}

InputText.defaultProps = {
  type: 'text',
};

export default InputText;
