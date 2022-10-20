import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTree {}

const Bronze = css<ISTree>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Silver = css<ISTree>``;

const Gold = css<ISTree>``;

const Platinum = css<ISTree>``;

const Diamond = css<ISTree>``;

export const STree = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
