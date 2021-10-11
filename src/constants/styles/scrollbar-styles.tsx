import { css } from "styled-components";

export const CSSScrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-priority-4);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    padding: 20% 0;
  }
`;
