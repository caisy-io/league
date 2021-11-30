import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 100%;
  height: 100%;
  
  display: flex;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

interface ISLayout{
  styleOverwrite?: any
}

export const SLayout = styled.div<ISLayout>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({styleOverwrite}) => styleOverwrite ?? ''};
`;
