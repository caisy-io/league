import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveBody03Medium } from "../../../constants/styles";

const Bronze = css`
  padding: 0 26px 16px 26px;

  p,
  a,
  span {
    text-align: center;
    ${CSSProgressiveBody03Medium}
  }

  p {
    color: var(--text-04);
  }

  a {
    color: var(--text-09);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SErrorScreenDescription = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
