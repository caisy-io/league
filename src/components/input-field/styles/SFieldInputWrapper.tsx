import styled, {css} from "styled-components";

const CSSExpanded = css`
  display: flex;
`;

export const SFieldInputWrapper = styled.div<{ isOpen: boolean; wrapperBgColor?: string }>`
  display: none;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--ui-03);
  padding: 12px;
  gap: 12px;
  background-color: ${({wrapperBgColor}) => wrapperBgColor || "var(--ui-01)"};
  ${({isOpen}) => isOpen && CSSExpanded};
`;
