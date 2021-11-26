import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const Bronze = css`
  all: unset;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-01);
  width: ${(props) => `${props.width}px`};
  max-width: 320px;

  &::placeholder {
    color: var(--text-03);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInput = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
