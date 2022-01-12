import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISThead {}

const Bronze = css<ISThead>``;

const Silver = css<ISThead>``;

const Gold = css<ISThead>``;

const Platinum = css<ISThead>``;

const Diamond = css<ISThead>``;

export const SThead = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
