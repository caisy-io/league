import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTd {}

const Bronze = css<ISTd>`
  vertical-align: middle;
  display: flex;
  flex: 1;
`;

const Silver = css<ISTd>``;

const Gold = css<ISTd>``;

const Platinum = css<ISTd>``;

const Diamond = css<ISTd>``;

export const STd = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
