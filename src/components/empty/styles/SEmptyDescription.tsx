import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmptyDescription {}

const Bronze = css<ISEmptyDescription>``;

const Silver = css<ISEmptyDescription>``;

const Gold = css<ISEmptyDescription>``;

const Platinum = css<ISEmptyDescription>``;

const Diamond = css<ISEmptyDescription>``;

export const SEmptyDescription = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
