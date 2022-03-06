import styled from "styled-components";
import { CSSProgressiveHighlight } from "../../../constants/styles";
export const SFieldErrors = styled.div`
  flex: 1;
  padding: 1rem;
  border-top: 1px solid var(--ui-03);
  text-transform: uppercase;

  ${CSSProgressiveHighlight}
  color: var(--text-06);
`;
