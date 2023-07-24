import styled from "styled-components";
export const SFieldHeader = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
  gap: 12px;
`;
