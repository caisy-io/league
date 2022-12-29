import styled from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";

export const SUsageChartCardChartContainer = styled.div`
  position: relative;
  display: flex;
  height: calc(342px + 24px);
  flex-direction: column;
  padding-left: 8px;
  gap: 12px;
  flex: 1;

  overflow: auto;
  ${CSSScrollbarStyles};
`;
