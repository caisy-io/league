import styled from "styled-components";

export const SDropdownFilter = styled.div<{ dropDownIndent?: number }>`
  position: absolute;
  background-color: white;
  /*border: 1px solid red;*/
  top: 65px;
  left: ${(props) => (props.dropDownIndent ? props.dropDownIndent + 70 : 0)}px;
  max-height: 300px;
  width: 240px;
  overflow-y: auto;
  padding-bottom: 8px;
  border-radius: 4px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 10px;

  .current-selection {
    background-color: var(--blue-100);
    color: var(--blue-blue);
  }

  .dropdown-add-option-invisible {
    transform: scale(0);
    height: 0px;
    opacity: 0;
    transition: height 0.2s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 0.045);
  }

  .dropdown-option-visible {
    opacity: 1;
    height: 30px;
    transform: scale(1);
    transition: height 0.2s;
    transition-timing-function: cubic-bezier(0.045, 0.355, 0.045, 0.645);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }
`;
