import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSDisabled = css`
  background-color: var(--ui-supportive-10);

  &:focus-within {
    border-color: none;
  }
`;

const Bronze = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  padding: 10px 16px;
  border: 1px solid var(--ui-03);
  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-color: var(--active-ui-03-2);
  }

  ${({ disabled }) => disabled && CSSDisabled}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectUserInputLabel = styled.label`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
