
import styled from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles/scrollbar-styles";

interface ISPopUpHeader {
  color?: string;
}

export const SPopUpContent = styled.div<ISPopUpHeader>`
  ${CSSScrollbarStyles};

  &::-webkit-scrollbar {
    width: 11px;
    border-left: 1px solid var(--neutral-200);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--interactional-secondary-08);
    border-radius: 3px;
    border-right: 3.5px solid #ffffff;
  }

  width: 100%;
  height: 561px;
  overflow: auto;
`;
