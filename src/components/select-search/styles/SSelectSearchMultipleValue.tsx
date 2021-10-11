import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISSelectSearchMultipleValue {}

const Bronze = css<ISSelectSearchMultipleValue>`
  padding: 8px 2px 8px 4px;
  border-radius: 6px;
  background-color: var(--neutral-300);
  height: min-content;
  width: max-content;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;

const Silver = css<ISSelectSearchMultipleValue>``;

const Gold = css<ISSelectSearchMultipleValue>``;

const Platinum = css<ISSelectSearchMultipleValue>``;

const Diamond = css<ISSelectSearchMultipleValue>``;

export const SSelectSearchMultipleValue = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
