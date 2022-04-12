import { CSSProperties } from "react";
import styled from "styled-components";

export const SEmptyTableCell = styled.div<{ styleOverwrite?: CSSProperties }>`
  overflow: hidden;
  flex: 1;
  ${({ styleOverwrite }) => (styleOverwrite ? styleOverwrite : "")}
`;
