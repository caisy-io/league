import styled from "styled-components";
export const SStringFieldInput = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  ${({ isOpen }) => isOpen && `
  `}
  border-top: 1px solid var(--ui-03);
  padding: 1rem;
  gap: .5rem;
`;
