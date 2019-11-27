import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'astroturf';

import { ReactComponent as IconChevronDown } from '../../images/svg/icon-chevron-down.svg';
import DropdownBasic from './dropdown-basic';
import {
  Dropdown,
  DropdownItem,
  DropdownItemInner,
  DropdownWrapper,
} from '../ui-kit/dropdown-styled-components';
import mixins from '../../styles/mixins';
import inputMixins from '../../styles/input-mixins';

const StyledSelect = styled.div`
  position: relative;
  user-select: none;
  height: 50px;

  &.small {
    height: 32px;
  }

  &.large {
    height: 48px;
  }

  &.mb {
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Current = styled.label`
  composes: ${mixins.fontFamilySansAlt};
  composes: ${inputMixins.buttonReset};
  composes: ${inputMixins.inputCommon};
  display: flex;
  align-items: center;
  position: relative;
  text-align: left;
  width: 100%;
  min-height: 0;
  height: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 0 40px 0 20px;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 32px;
    top: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: 0 3px 3px 0;
    transform: none;
    background-color: #ff8e4f;
  }

  &.altArrowButton {
    padding-right: 24px;

    &:after {
      display: none;
    }
  }

  &.invalid {
    border-color: #ff5a4f;
  }

  &.nonactive {
    opacity: 0.5;
  }

  &.small {
    padding-left: 10px;
    font-size: 16px;
  }

  &.altStyling {
    border-color: #e0e0e0;
  }
`;

const Input = styled.input`
  composes: ${mixins.fontFamilySansAlt};
  composes: ${inputMixins.inputCommon};
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  opacity: 0;
  visibility: hidden;
  padding: 0 40px 0 12px;

  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

const Placeholder = styled.span`
  color: #949494;
  font-size: inherit;
`;

const StyledChevronDown = styled(IconChevronDown)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  fill: #fff;
  right: 11px;

  &.altArrowButton {
    right: 9px;
    fill: #373e4c;
  }
`;

const InnerComponent = (
  {
    dropdownProps,
    options,
    withInput,
    invalid,
    small,
    large,
    altArrowButton,
    placeholder,
    name,
    className,
    altStyling,
    ...rest
  },
  ref
) => {
  const {
    getItemProps,
    isOpen,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getLabelProps,
    inputValue,
    nonactive,
  } = dropdownProps;

  const inputNode = useRef(null);
  const prevIsOpen = useRef(undefined);

  useEffect(() => {
    if (isOpen && withInput) {
      inputNode.current.focus();
    }
  }, [isOpen, withInput]);

  const optionsFiltered = useMemo(() => {
    function filter(options) {
      if (prevIsOpen.current !== isOpen) {
        prevIsOpen.current = isOpen;
        return options;
      }
      const inputValueLowerCase = inputValue.toLowerCase();
      return options.filter(
        (item) =>
          !inputValueLowerCase ||
          item.label.toLowerCase().includes(inputValueLowerCase)
      );
    }

    return withInput ? filter(options) : options;
  }, [options, withInput, inputValue, isOpen]);

  function renderCurrent() {
    const placeholderJsx = (selectedItem && selectedItem.label) || (
      <Placeholder>{placeholder || 'Select'}</Placeholder>
    );

    if (withInput) {
      return isOpen ? null : placeholderJsx;
    }

    return placeholderJsx;
  }

  return (
    <StyledSelect
      small={small}
      large={large}
      ref={ref}
      className={className}
      {...rest}
    >
      <Current
        {...getLabelProps()}
        {...getToggleButtonProps()}
        invalid={invalid}
        aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
        altArrowButton={altArrowButton}
        small={small}
        nonactive={nonactive}
        altStyling={altStyling}
      >
        {renderCurrent()}
        <StyledChevronDown altArrowButton={altArrowButton} />
      </Current>
      {withInput && (
        <Input
          type={'text'}
          {...getInputProps()}
          ref={inputNode}
          show={isOpen}
          name={name}
          autoComplete="new-password"
        />
      )}
      <DropdownWrapper
        opened={isOpen && optionsFiltered.length > 0}
        {...getMenuProps()}
      >
        <Dropdown opened={isOpen}>
          {optionsFiltered.map((item, index) => {
            return (
              <DropdownItem {...getItemProps({ key: item.value, index, item })}>
                <DropdownItemInner
                  highlighted={highlightedIndex === index}
                  selected={selectedItem === item}
                  small={small}
                >
                  {item.label}
                </DropdownItemInner>
              </DropdownItem>
            );
          })}
        </Dropdown>
      </DropdownWrapper>
    </StyledSelect>
  );
};

const Inner = React.forwardRef(InnerComponent);

class InputSelect extends React.PureComponent {
  render() {
    const {
      options,
      onChange,
      selectedItem,
      initialSelectedItem,
      field,
      form,
      name,
      className,
      ...rest
    } = this.props;

    return (
      <DropdownBasic
        field={field}
        form={form}
        onChange={onChange}
        initialSelectedItem={initialSelectedItem}
        selectedItem={selectedItem}
      >
        {({ dropdownProps }) => {
          return (
            <Inner
              dropdownProps={dropdownProps}
              options={options}
              {...rest}
              {...dropdownProps.getRootProps()}
              name={field ? field.name : name}
              className={className}
            />
          );
        }}
      </DropdownBasic>
    );
  }
}

InputSelect.defaultProps = {
  fontSize: 16,
};

export default InputSelect;
