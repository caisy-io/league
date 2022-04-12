import { CSSProperties } from "react";
import styled from "styled-components";

export const SEmptyTableCellContent = styled.div<{ styleOverwrite?: CSSProperties }>`
  height: 88px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  ${({ styleOverwrite }) => (styleOverwrite ? styleOverwrite : "")}
`;
