import styled from "styled-components";
import {CSSProgressiveHighlight} from "../../../constants/styles";

export const SFieldErrorsDropdownBadge = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--active-interactional-secondary-02);
  color: var(--text-02);
  ${CSSProgressiveHighlight};
  margin-right: 4px;
`;
