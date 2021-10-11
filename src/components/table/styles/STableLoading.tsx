import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTableLoading {
  height: number;
}

const Bronze = css<ISTableLoading>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}px;
`;

const Silver = css<ISTableLoading>``;

const Gold = css<ISTableLoading>``;

const Platinum = css<ISTableLoading>``;

const Diamond = css<ISTableLoading>``;

export const STableLoading = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
