import styled from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";

export const SUsageChartCardChartContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 342px;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  gap: 12px;
  flex: 1;

  overflow: auto hidden;
  ${CSSScrollbarStyles};
`;
