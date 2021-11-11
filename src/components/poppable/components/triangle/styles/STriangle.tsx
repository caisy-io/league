import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../../../constants/styles/mediaquerys";

interface ISTriangle {
}

const Bronze = css<ISTriangle>`
    .poppable {
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

        .poppable-triangle {
            position: fixed;
            border-style: solid;
            border-color: transparent;
            pointer-events: none;
        }
    }
`;

const Silver = css<ISTriangle>``;

const Gold = css<ISTriangle>``;

const Platinum = css<ISTriangle>``;

const Diamond = css<ISTriangle>``;

export const STriangle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
