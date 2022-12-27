import styled from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";

export const SUsageChartCardChartContainer = styled.div`
  position: relative;
  /* box-sizing: border-box; */
  display: flex;
  height: 342px;
  padding-bottom: 16px;
  flex-direction: column;
  padding-left: 8px;
  gap: 12px;
  flex: 1;

  overflow-y: hidden;
  overflow-x: auto;
  ${CSSScrollbarStyles};

  /* & {
    transform: rotateX(180deg);
  }

  & * {
    transform: rotateX(180deg);
  } */
`;
