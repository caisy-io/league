import styled from "styled-components";
import {CSSProgressiveBody03Medium} from "../../../constants/styles/design-tokens/fonts/CSSTypographies";

export const SDatePickerButton = styled.button`
  display: flex;
  align-items: center;
  ${CSSProgressiveBody03Medium};
  color: var(--text-01);
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  svg {
    width: 16px;
    height: 16px;
    color: var(--icon-03);
  }
`;