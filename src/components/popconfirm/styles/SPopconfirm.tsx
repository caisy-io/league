import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  border-radius: 8px;
  width: 312px;
  padding: 16px;
  background-color: var(--ui-01);
  gap: 8px;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: var(--box-shadow-light-pop-elevation);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPopconfirm = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
