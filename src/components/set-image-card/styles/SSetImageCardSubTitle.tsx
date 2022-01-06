import styled, { css } from "styled-components";
import { CSSProgressiveBody02Medium } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin-bottom: 32px;

  ${CSSProgressiveBody02Medium};
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSetImageCardSubTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
