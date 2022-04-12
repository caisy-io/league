import styled from "styled-components";

export const SEmptyTableSkeleton = styled.div`
  width: ${({ width }) => width || "16px"};
  height: ${({ height }) => height || "16px"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: 0.25rem;
  background-color: var(--ui-03);
  position: relative;
  overflow: hidden;
`;
