import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../../../constants/styles/mediaquerys";

interface ISTriangle {}

const Bronze = css<ISTriangle>``;

const Silver = css<ISTriangle>``;

const Gold = css<ISTriangle>``;

const Platinum = css<ISTriangle>``;

const Diamond = css<ISTriangle>``;

export const STriangle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
