import styled from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles";
export const SFieldDescription = styled.p<{ required: boolean; isOpen: boolean }>`
  ${CSSProgressiveBody03Medium}
  color: var(--text-03);
  padding-top: 0.25rem;
`;
