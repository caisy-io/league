import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISStackable {}

const Bronze = css<ISStackable>`
  position: absolute;

  &.vafter .poppable-triangle {
      border-bottom-color: black;
  }

  &.vbefore .poppable-triangle {
      border-top-color: black;
  }

  &.hbefore .poppable-triangle {
      border-left-color: black;
  }

  &.hafter .poppable-triangle {
      border-right-color: black;
  }
`;

const Silver = css<ISStackable>``;

const Gold = css<ISStackable>``;

const Platinum = css<ISStackable>``;

const Diamond = css<ISStackable>``;

export const SStackable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
