import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
  CSSProgressiveCaption01Medium,
} from "../../../constants/styles";

const Bronze = css`
  text-align: center;
  color: var(--text-04);
  ${CSSProgressiveCaption01Medium};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SEmptyTableBannerDescription = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
