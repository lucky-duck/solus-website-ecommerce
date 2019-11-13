import React from 'react';
import Downshift from 'downshift';

function DropdownBasic({
  children,
  selectedItem,
  initialSelectedItem,
  onChange,
  onInputValueChange,
}) {
  function handleChange(option) {
    onChange && onChange(option.value);
  }

  return (
    <Downshift
      onChange={handleChange}
      onInputValueChange={onInputValueChange}
      itemToString={(value) => {
        return value ? value.label : '';
      }}
      selectedItem={selectedItem}
      initialSelectedItem={initialSelectedItem}
    >
      {(dropdownProps) => children({ dropdownProps })}
    </Downshift>
  );
}

export default DropdownBasic;
