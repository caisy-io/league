import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmpty {}

const Bronze = css<ISEmpty>`
  margin: 32px 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Silver = css<ISEmpty>``;

const Gold = css<ISEmpty>``;

const Platinum = css<ISEmpty>``;

const Diamond = css<ISEmpty>``;

export const SEmpty = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
