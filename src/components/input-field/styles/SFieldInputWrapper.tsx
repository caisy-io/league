import styled, { css } from "styled-components";

const CSSExpanded = css`
  display: flex;
`;

export const SFieldInputWrapper = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  ${({ isOpen }) => isOpen && CSSExpanded}
  border-top: 1px solid var(--ui-03);
  padding: 1rem;
  gap: 0.5rem;
`;
