import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveBody03 } from "../../../constants/styles";

const Bronze = css`
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
  background-color: transparent;
  width: auto;
  color: var(--text-01);
  ${CSSProgressiveBody03}

  &::placeholder {
    color: var(--text-03);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectUserInputInput = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
