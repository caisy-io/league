import styled from "styled-components";

export const SUsageAmountItemUsageGraph = styled.div`
  position: relative;
  height: ${({ size }) => (size ? size : "32px")};
  width: ${({ size }) => (size ? size : "32px")};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    height: ${({ size }) => (size ? size : "32px")};
    width: ${({ size }) => (size ? size : "32px")};
    stroke: ${({ barColor }) => (barColor ? barColor : "var(--ui-supportive-06)")};
  }
`;
