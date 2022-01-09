import styled from "styled-components";

interface ISDatePickerNavigationButton {
}

export const SDatePickerNavigationButton = styled.button<ISDatePickerNavigationButton>`
  border: 1px solid var(--interactional-secondary-08);
  box-sizing: border-box;
  border-radius: 6px;
  background: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-01);
  padding: 0;
  outline: none;
  cursor: pointer;
  pointer-events: none;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  :hover {
    border-color: var(--interactional-primary-01);
    color: var(--interactional-primary-01);
  }

`;
