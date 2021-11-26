import styled, { css } from "styled-components";
import { ProgressiveBody03 } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  all: unset;
  ${ProgressiveBody03}
  background-color: transparent;
  color: var(--text-01);
  flex-grow: 1;
  max-width: 50%;

  &::placeholder {
    color: var(--text-03);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchInput = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
