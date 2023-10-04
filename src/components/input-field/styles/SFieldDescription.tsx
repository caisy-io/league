import styled from "styled-components";
import {CSSProgressiveCaption01} from "../../../constants/styles";

export const SFieldDescription = styled.p<{ required: boolean; isOpen: boolean }>`
  ${CSSProgressiveCaption01};
  color: var(--text-03);
`;
