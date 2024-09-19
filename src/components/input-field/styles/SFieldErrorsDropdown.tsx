import styled from "styled-components";
import { CSSProgressiveHighlight } from "../../../constants/styles";

export const SFieldErrorsDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px 8px 16px;
  cursor: pointer;
  user-select: none;
  ${CSSProgressiveHighlight};
  color: var(--ui-supportive-01);
  transition: color 0.2s ease-in-out;

  :hover {
    color: var(--active-interactional-secondary-02);

    .errors-count-badge {
      background-color: var(--active-interactional-secondary-02);
    }
  }
`;
