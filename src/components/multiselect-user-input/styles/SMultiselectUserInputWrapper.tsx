import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

type TProps = {
  inputPadding: number;
};

const Bronze = css<TProps>`
  position: relative;

  > div:first-child {
    height: 64px;

    input {
      ${({ inputPadding }) =>
        inputPadding &&
        css`
          padding-left: ${inputPadding}px;
        `};
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectUserInputWrapper = styled.div<TProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
