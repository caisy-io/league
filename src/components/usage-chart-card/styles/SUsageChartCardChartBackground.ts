import styled from "styled-components";

export const SUsageChartCardChartBackground = styled.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  height: 347px;
  width: ${({ chartWidth }) => chartWidth}px;
  flex: 1;
`;
