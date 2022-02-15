import { css } from "styled-components";

export const CSSScrollbarStyles = css`
  &::-webkit-scrollbar {
    background-color: var(--ui-01);
    border-right: 1px solid var(--ui-03);
    border-left: 1px solid var(--ui-03);
    width: 0.75rem;
    box-sizing: border-box;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 49px;
    background-color: var(--interactional-secondary-08);
    width: 4px;
  }
`;
