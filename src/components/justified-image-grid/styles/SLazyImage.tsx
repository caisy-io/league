import styled, { css } from "styled-components";

const Default = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: var(--ui-03);
  cursor: pointer;
`;
const withSvg = css`
  object-fit: contain;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  padding: 8px;
`;

export const SLazyImage = styled.img<{ isSvg: boolean; loading?:boolean }>`
  ${Default};
  ${(props) => (props.isSvg ? withSvg : "")};
`;
