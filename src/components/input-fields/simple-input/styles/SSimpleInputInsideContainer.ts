import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";
import { SSimpleInputTextWidth } from "./SSimpleInputTextWidth";

const Bronze = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:focus-within {
    input,
    textarea {
      &::-webkit-input-placeholder {
        color: var(--ui-01);
      }
      &::-moz-placeholder {
        color: var(--ui-01);
      }
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInputInsideContainer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
