import styled, { css } from "styled-components";

const Bronze = css`
  background: var(--ui-03);
  padding: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: var(--text-04);
    text-transform: uppercase;
  }
  cursor: pointer;
`;


export const SImageLabelPreview = styled.div`
  ${Bronze}
`;
