import styled, { css } from "styled-components";

const Default = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: var(--ui-03);
  opacity: 1;
  transition: 0.2s opacity ease-in;
  cursor: pointer;
`;
const withSvg = css`
  object-fit: contain;
  --svg-padding: 8px;
  width: calc(100% - var(--svg-padding) * 2);
  height: calc(100% - var(--svg-padding) * 2);
  padding: var(--svg-padding);
`;

export const SLazyImage = styled.img<{ isSvg: boolean; loading?: boolean }>`
  ${Default};
  ${(props) => (props.isSvg ? withSvg : "")};
`;
