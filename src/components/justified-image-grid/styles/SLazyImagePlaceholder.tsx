import styled from "styled-components";

export const SLazyImagePlaceholder = styled.div.attrs((props: { blurHashCss?: string; isLoading?: boolean }) => ({
  style: {
    background: props.blurHashCss || "",
    opacity: props.isLoading ? 1 : 0,
  },
}))`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  inset: 0;
  z-index: 10;
  opacity: 1;
  transition: 0.2s opacity ease-in;
  background: var(--ui-03);
`;
