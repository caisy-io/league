import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

interface ISKeyActionSnackbar {}

const Bronze = css<ISKeyActionSnackbar>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  color: var(--text-02);
  padding: 6px 8px;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: var(--ui-overlay-01);
    border-radius: 4px;
  }
`;

const Silver = css<ISKeyActionSnackbar>``;

const Gold = css<ISKeyActionSnackbar>``;

const Platinum = css<ISKeyActionSnackbar>``;

const Diamond = css<ISKeyActionSnackbar>``;

export const SKeyActionSnackbar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
