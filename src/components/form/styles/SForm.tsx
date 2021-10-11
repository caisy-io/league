import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISForm {}

const Bronze = css<ISForm>``;

const Silver = css<ISForm>``;

const Gold = css<ISForm>``;

const Platinum = css<ISForm>``;

const Diamond = css<ISForm>``;

export const SForm = styled.form`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
