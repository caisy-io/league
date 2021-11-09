import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

interface ISKeyActionSnackbarKey {}

const Bronze = css<ISKeyActionSnackbarKey>`
  height: 16px;
  padding: 0 1.5px;
  background-color: #f7f9fa;
  font-size: 11px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ui-overlay-01);
  border-radius: 4px;
  min-width: 13px;
`;

const Silver = css<ISKeyActionSnackbarKey>``;

const Gold = css<ISKeyActionSnackbarKey>``;

const Platinum = css<ISKeyActionSnackbarKey>``;

const Diamond = css<ISKeyActionSnackbarKey>``;

export const SKeyActionSnackbarKey = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
