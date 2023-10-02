import styled, {css} from "styled-components";

const CSSExpanded = css`
  display: flex;
`;

export const SFieldInputOutsideWrapper = styled.div<{ isOpen: boolean; wrapperBgColor?: string }>`
  display: none;
  position: relative;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
  margin-left: 24px;
  ${({isOpen}) => isOpen && CSSExpanded};
  background-color: ${({wrapperBgColor}) => wrapperBgColor || "var(--ui-01)"};
`;
