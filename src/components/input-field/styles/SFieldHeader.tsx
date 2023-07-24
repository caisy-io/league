import styled from "styled-components";
export const SFieldHeader = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  /* outline: 1px solid red; */
`;
