import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISLoadingBorderWrapper {
  percentageLoaded: number;
}

const Bronze = css`
  svg {
    position: absolute;
    top: 0;
    right: 0;
    path {
      transition: stroke-dashoffset 200ms;
      stroke-dashoffset: ${(props) => 1 - props.percentageLoaded / 100};
      stroke-dasharray: 1;
      stroke: var(--tag-05);
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLoadingBorderWrapper = styled.div<ISLoadingBorderWrapper>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
