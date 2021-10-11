import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTableLoadingRow {}

const Bronze = css<ISTableLoadingRow>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Silver = css<ISTableLoadingRow>``;

const Gold = css<ISTableLoadingRow>``;

const Platinum = css<ISTableLoadingRow>``;

const Diamond = css<ISTableLoadingRow>``;

export const STableLoadingRow = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
