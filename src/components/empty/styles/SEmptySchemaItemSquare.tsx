import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  border-radius: 4px;

  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;

  background-color: var(--ui-03);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SEmptyGridItemSquare = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
