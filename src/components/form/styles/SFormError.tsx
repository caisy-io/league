import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFormError {}

const Bronze = css<ISFormError>`
  color: var(--states-error);
  font-size: 12px;
`;

const Silver = css<ISFormError>``;

const Gold = css<ISFormError>``;

const Platinum = css<ISFormError>``;

const Diamond = css<ISFormError>``;

export const SFormError = styled.li`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
