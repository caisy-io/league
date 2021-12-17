import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItemChildren {}

const Bronze = css<ISListItemChildren>``;

const Silver = css<ISListItemChildren>``;

const Gold = css<ISListItemChildren>``;

const Platinum = css<ISListItemChildren>``;

const Diamond = css<ISListItemChildren>``;

export const SListItemChildren = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
