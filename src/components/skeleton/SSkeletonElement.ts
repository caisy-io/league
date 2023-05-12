import styled from "styled-components";

export const SSkeletonElement = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width || "16px"};
  height: ${({ height }) => height || "16px"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background-color: var(--ui-03);
`;
