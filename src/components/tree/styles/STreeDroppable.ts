import styled, { css } from "styled-components";

const CSSVisible = css`
  height: 100%;
`;

export const STreeDroppable = styled.div`
  height: 0;
  overflow: hidden;

  ${({ visible }) => visible && CSSVisible};
`;
