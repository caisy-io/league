import styled, { css } from "styled-components";

const CSSVisible = css`
  height: 100%;
`;

export const STreeItemChildren = styled.div`
  height: 0;
  overflow: hidden;

  ${({ expanded }) => expanded && CSSVisible};
`;
