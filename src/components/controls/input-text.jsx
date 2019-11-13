import React from 'react';
import styled from 'astroturf';
import TextareaAutosize from 'react-textarea-autosize';

import mixins, { inputMixins } from '../../styles/mixins';

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
  @import '../../styles/colors.scss';
  composes: ${inputMixins.inputReset} ${inputMixins.inputCommon} ${mixins.fontFamilySansAlt};

  &.invalid {
    border-color: $colorDanger;
  }
`;

const Textarea = styled(TextareaAutosize)`
  composes: ${inputMixins.inputReset} ${inputMixins.inputCommon} ${mixins.fontFamilySansAlt};
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
  id,
  type,
  defaultValue,
  value,
  placeholder,
  inputRef,
  autocomplete,
  onKeyDown,
  label,
  field,
  form,
  ...rest
}) {
  const InputComponent = type === 'textarea' ? Textarea : Input;

  const invalid = form.touched[field.name] && !!form.errors[field.name];

  return (
    <StyledInputText className={className} invalid={invalid} {...rest}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputComponent
        id={id}
        type={type}
        defaultValue={defaultValue}
        invalid={invalid}
        placeholder={placeholder}
        ref={inputRef}
        autoComplete={autocomplete}
        onKeyDown={onKeyDown}
        {...field}
      />
    </StyledInputText>
  );
}

InputText.defaultProps = {
  type: 'text',
};

export default InputText;
