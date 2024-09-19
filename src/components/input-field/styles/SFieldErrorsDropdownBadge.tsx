import styled from "styled-components";
import {CSSProgressiveHighlight} from "../../../constants/styles";

export const SFieldErrorsDropdownBadge = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  background-color: var(--ui-supportive-01);
  color: var(--text-02);
  ${CSSProgressiveHighlight};
  margin-right: 4px;
`;
