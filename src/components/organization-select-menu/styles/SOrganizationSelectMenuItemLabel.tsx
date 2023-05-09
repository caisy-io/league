import styled, { css, keyframes } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
opacity: 1;
  }
`;

const Bronze = css<{ expanded?: boolean }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #172c55;
  margin-left: 8px;
  animation: ${fadeIn} 0.8s ease-in-out;
  ${(props) => (!props.expanded ? "width:0px" : "width: 135px")};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectMenuItemLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
