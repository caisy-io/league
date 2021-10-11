import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFormLabel {}

const Bronze = css<ISFormLabel>`
  font-size: 12px;
`;

const Silver = css<ISFormLabel>``;

const Gold = css<ISFormLabel>``;

const Platinum = css<ISFormLabel>``;

const Diamond = css<ISFormLabel>``;

export const SFormLabel = styled.label`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
