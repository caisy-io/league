import styled, { css } from "styled-components";
import { CSSProgressiveBody03 } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const Bronze = css`
  outline: none;
  border: none;
  ${CSSProgressiveBody03};
  background-color: transparent;
  color: var(--text-01);
  flex-grow: 1;
  max-width: 100%;
  padding: 0;

  &::placeholder {
    color: var(--text-03);
  }

  text-align: left;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFloatingSearchInput = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
