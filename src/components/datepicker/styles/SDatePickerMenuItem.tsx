import styled from "styled-components";
import {CSSProgressiveCaption01} from "../../../constants/styles/design-tokens/fonts/CSSTypographies";

const SDatePickerMenuItem = styled.button`
  outline: none;
  border: none;
  padding: 4px 8px;
  ${CSSProgressiveCaption01};
  color: var(--text-01);
  border-bottom: 1px solid var(--ui-02);
  background-color: var(--ui-01);
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  transition: color 300ms, background-color 300ms;
  
  :last-child {
    border-bottom: 0;
  }
  
  :hover {
    color: var(--text-02);
    background-color: var(--ui-supportive-06);
  }
`;

export default SDatePickerMenuItem;
