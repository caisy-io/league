import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISPoppable {
}

const Bronze = css<ISPoppable>`
  .poppable {
  &.placement-hidden {
    opacity: 0;
    pointer-events: none;
  }
}
`;

const Silver = css<ISPoppable>``;

const Gold = css<ISPoppable>``;

const Platinum = css<ISPoppable>``;

const Diamond = css<ISPoppable>``;

export const SPoppable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
