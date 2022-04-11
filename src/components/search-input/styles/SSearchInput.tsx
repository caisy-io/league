import styled, { css } from "styled-components";
import { CSSProgressiveBody03 } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const Bronze = css`
  outline: none;
  border: none;
  ${CSSProgressiveBody03};
  background-color: transparent;
  color: var(--text-01);
  width: calc(100% - 40px);
  padding: 0;

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
