import styled, { css } from "styled-components";
import { CSSScrollbarStyles } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISList {}

const Bronze = css<ISList>`
  background-color: var(--ui-01);

  div {
    ${CSSScrollbarStyles}
    overflow-x: hidden;
  }
`;

const Silver = css<ISList>``;

const Gold = css<ISList>``;

const Platinum = css<ISList>``;

const Diamond = css<ISList>``;

export const SList = styled.ul`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
