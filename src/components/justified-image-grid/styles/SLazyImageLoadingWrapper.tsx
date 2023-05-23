import styled, { css } from "styled-components";

const Default = css<{blurHashCss?:string}>`
  position: relative;
  &,
  > .placeholder {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  > .placeholder {
    position: absolute;
    inset: 0;
    z-index: 10;
    opacity: 1;
    transition: 0.2s opacity ease-in;
    background: var(--ui-03);
    ${(props) => props.blurHashCss ? `background: ${props.blurHashCss}` : ''};
  }
`;

const finishedLoading = css`
  > .placeholder {
    opacity: 0;
  }
`;

export const SLazyImageLoadingWrapper = styled.div<{ isSvg: boolean; blurHashCss?: string; loading?: boolean }>`
  ${Default};
  ${(props) => (props.isLoading ? "" : finishedLoading)};
`;
