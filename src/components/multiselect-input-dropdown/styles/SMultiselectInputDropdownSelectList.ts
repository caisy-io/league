import styled from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";

export const SMultiselectInputDropdownSelectList = styled.div`
  overflow: auto;
  ${CSSScrollbarStyles};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : "initial")};
`;
