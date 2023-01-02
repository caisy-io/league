import styled from "styled-components";
import { CSSProgressiveCaption02Medium } from "../../../constants/styles";

export const SUsageChartCardChartDate = styled.div`
  min-width: 40px;
  margin: 0 9px;
  height: 14px;
  box-sizing: border-box;
  ${CSSProgressiveCaption02Medium};
  color: var(--text-04);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;
