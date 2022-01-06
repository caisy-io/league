import styled, { css } from "styled-components";
import { CSSProgressiveHeading01 } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveHeading01};
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSetImageCardTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
