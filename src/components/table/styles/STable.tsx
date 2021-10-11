import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTable {}

const Bronze = css<ISTable>`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Silver = css<ISTable>``;

const Gold = css<ISTable>``;

const Platinum = css<ISTable>``;

const Diamond = css<ISTable>``;

export const STable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
