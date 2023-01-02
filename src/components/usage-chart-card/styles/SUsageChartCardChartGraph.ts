import styled from "styled-components";

export const SUsageChartCardChartGraph = styled.div`
  min-width: 40px;
  margin: 0 9px;
  z-index: 2;
  background-color: var(--ui-supportive-06);
  box-sizing: border-box;
  height: ${({ percentage }) => (percentage ? `${percentage}%` : "0.01px")};
`;
