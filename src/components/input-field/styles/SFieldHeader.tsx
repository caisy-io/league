import styled from "styled-components";

export const SFieldHeader = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 12px;
  cursor: pointer;
`;
