import styled, { css } from "styled-components";
import { CSSProgressiveCaption02 } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveCaption02}
  color: #8D8D8D;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 130px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProfileDetailsListItemLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
