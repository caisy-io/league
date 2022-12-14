import styled from "styled-components";
import { CSSProgressiveCaption01, CSSProgressiveCaption01Medium } from "../../../constants/styles";

export const SUsageAmountItemDescription = styled.div`
  ${CSSProgressiveCaption01};
  color: var(--text-01);

  a {
    color: var(--icon-09);
    text-decoration: none;
    ${CSSProgressiveCaption01Medium};
  }
`;
