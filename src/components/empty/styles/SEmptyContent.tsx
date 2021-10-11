import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmptyContent {}

const Bronze = css<ISEmptyContent>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Silver = css<ISEmptyContent>``;

const Gold = css<ISEmptyContent>``;

const Platinum = css<ISEmptyContent>``;

const Diamond = css<ISEmptyContent>``;

export const SEmptyContent = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
