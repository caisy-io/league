import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
  CSSProgressiveBody03Semibold,
} from "../../../constants/styles";

const Bronze = css`
  margin-top: 24px;
  margin-bottom: 8px;
  text-align: center;
  color: var(--text-01);
  ${CSSProgressiveBody03Semibold};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SEmptyTableBannerTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
