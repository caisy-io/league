import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
import { IPlacement } from "../../poppable/Poppable";

interface ISStackable {
  placement: IPlacement;
}

const Bronze = css<ISStackable>`
  position: absolute;
  ${({ placement }) => placement?.name === "hidden" && "visibility: hidden"};
  &.vafter .poppable-triangle {
    border-bottom-color: var(--triangle-color, black);
  }

  &.vbefore .poppable-triangle {
    border-top-color: var(--triangle-color, black);
  }

  &.hbefore .poppable-triangle {
    border-left-color: var(--triangle-color, black);
  }

  &.hafter .poppable-triangle {
    border-right-color: var(--triangle-color, black);
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
