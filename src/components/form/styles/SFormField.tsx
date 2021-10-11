import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFormField {}

const Bronze = css<ISFormField>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Silver = css<ISFormField>``;

const Gold = css<ISFormField>``;

const Platinum = css<ISFormField>``;

const Diamond = css<ISFormField>``;

export const SFormField = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
