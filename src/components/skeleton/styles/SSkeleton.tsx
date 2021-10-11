import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  div,
  li {
    height: 16px;
    background-color: var(--neutral-300);
    border-radius: 3px;
  }

  div {
    width: 40%;
    margin-bottom: 32px;
  }

  li + li {
    margin-top: 16px;
  }

  li:last-of-type {
    width: 60%;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSkeleton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
