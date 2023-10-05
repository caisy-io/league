import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTh {}

const Bronze = css<ISTh>`
  flex: 1;
  display: flex;
  align-items: center;
  user-select: none;
  box-sizing: border-box;
`;

const Silver = css<ISTh>``;

const Gold = css<ISTh>``;

const Platinum = css<ISTh>``;

const Diamond = css<ISTh>``;

export const STh = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
