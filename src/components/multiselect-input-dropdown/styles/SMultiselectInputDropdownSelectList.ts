import styled, {css} from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";

export const SMultiselectInputDropdownSelectList = styled.div`
  overflow: auto;
  ${CSSScrollbarStyles};
  ${({ maxHeight }) => (maxHeight ? css`max-height: ${maxHeight}px;` : "")};
`;
