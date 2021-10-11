import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFormErrorList {}

const Bronze = css<ISFormErrorList>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`;

const Silver = css<ISFormErrorList>``;

const Gold = css<ISFormErrorList>``;

const Platinum = css<ISFormErrorList>``;

const Diamond = css<ISFormErrorList>``;

export const SFormErrorList = styled.ul`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
