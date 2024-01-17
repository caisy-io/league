import styled from "styled-components";
import {CSSProgressiveBody03Medium} from "../../../constants/styles/design-tokens/fonts/CSSTypographies";

export const SDatePickerButton = styled.button<{isClickable: boolean}>`
  display: flex;
  align-items: center;
  ${CSSProgressiveBody03Medium};
  color: var(--text-01);
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
  ${(isClickable: boolean) => isClickable ? `cursor: pointer;` : `cursor: auto;`};
  padding: 0;
  svg {
    width: 16px;
    height: 16px;
    color: var(--icon-03);
  }
`;