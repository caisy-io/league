import styled, { css } from "styled-components";

const CSSExpanded = css`
  display: flex;
`;

export const SFieldInputWrapper = styled.div<{ isOpen: boolean; inlineStackedLevel?: number }>`
  margin-top: 12px;
  /* outline: 1px solid red; */
  display: none;
  flex-direction: column;
  align-items: center;
  ${({ isOpen }) => isOpen && CSSExpanded}
  border-top: 1px solid var(--ui-03);
  padding: 0 1rem 1rem 1rem;
  gap: 0.5rem;
  background: ${({ inlineStackedLevel }) => ((inlineStackedLevel ?? 0) % 2 === 0 ? "var(--ui-01)" : "var(--ui-02)")};
`;
