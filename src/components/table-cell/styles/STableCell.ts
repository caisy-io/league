import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);

  transition: background-color 150ms;

  cursor: pointer;

  &:hover {
    background-color: var(--hover-ui-01-1);
    ${(props) => props.activated && "background-color: var(--active-ui-01-1);"}
  }

  ${(props) => props.activated && "background-color: var(--active-ui-01-1);"}

  &:active {
    background-color: var(--active-ui-01-1);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STableCell = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
