import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISLayoutHeader {}

const Bronze = css<ISLayoutHeader>`
  height: 64px;
  padding: 0 32px;

  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 24, 36, 0.06) 0px 2px 4px 0px;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutHeader = styled.header`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
