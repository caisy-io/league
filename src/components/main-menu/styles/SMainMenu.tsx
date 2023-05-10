import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  padding: 12px 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-right: 1px solid var(--ui-03);
  background-color: var(--ui-01);
  max-width: 150px;
  gap: 20px;
  height: auto;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMainMenu = styled.div<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
