import styled from "styled-components";
import {CSSProgressiveHighlight} from "../../../constants/styles";

export const SFieldErrorsDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px 8px 16px;
  cursor: pointer;
  user-select: none;
  color: var(--hover-text-06, #CB2D3B);
  ${CSSProgressiveHighlight};

`;
