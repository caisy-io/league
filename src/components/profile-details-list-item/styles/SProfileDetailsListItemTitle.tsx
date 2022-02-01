import styled, { css } from "styled-components";
import { CSSProgressiveBody02Semibold } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody02Semibold};
  color: var(--text-01);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 130px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProfileDetailsListItemTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
