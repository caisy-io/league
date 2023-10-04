import styled from "styled-components";
import {CSSProgressiveCaption01Medium} from "../../../constants/styles";

export const SFieldErrorsDropdownError = styled.div`
  padding: 12px;
  border-bottom: 1px solid #F7E0DA;
  color: var(--text-06);
  ${CSSProgressiveCaption01Medium};
  
  &:last-of-type {
    border-bottom: 0;
  }
`;
