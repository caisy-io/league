import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmptyIconWrapper {}

const Bronze = css<ISEmptyIconWrapper>`
  margin-bottom: 8px;
`;

const Silver = css<ISEmptyIconWrapper>``;

const Gold = css<ISEmptyIconWrapper>``;

const Platinum = css<ISEmptyIconWrapper>``;

const Diamond = css<ISEmptyIconWrapper>``;

export const SEmptyIconWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
