import styled from 'astroturf';

export const DropdownWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  min-width: 50px;
  width: 100%;
  z-index: 10;
  //visibility: hidden;
  max-height: 380px;
  overflow-y: auto;
  border: 1px solid #c6c7ca;
  user-select: none;
  //transition-property: opacity;
  //transition-duration: 0.3s;
  //transition-timing-function: ease-out;
  //transform-origin: center top;
  //opacity: 0;
  //will-change: transform;
  display: none;

  &.opened {
    display: block;
    //visibility: visible;
    //opacity: 1;
  }
`;

export const Dropdown = styled.ul`
  position: relative;
  list-style: none;
  //transition-property: transform;
  //transition-duration: 0.15s;
  //transition-timing-function: ease-out;
  //transform-origin: center top;
  border-radius: 4px;
  background-color: #fff;
  //transform: translateY(-100%);
  //will-change: transform;
  display: none;
  padding-left: 0;

  &.opened {
    //transform: translateY(0%);
    display: block;
  }
`;

export const DropdownItemInner = styled.span`
  display: flex;
  align-items: center;
  transition: opacity 0.15s ease-out;
  padding: 5px 15px;
  height: 42px;

  &.highlighted {
    background-color: #efefef;
    transition: none;
  }

  &.selected {
    color: #4882c9;
  }

  &.small {
    height: 32px;
  }
`;

export const DropdownItem = styled.li`
  cursor: pointer;

  &:last-child {
    ${DropdownItemInner} {
      border-bottom: none;
    }
  }
`;
