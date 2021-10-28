import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
    .resizable {
        position: absolute;
        width: 20px;
        height: 20px;
        user-select: none;

        &.right-resizer {
            right: 10px;
            top: 0;
            height: 100%;
            cursor: ew-resize;
        }

        &.left-resizer {
            left: 10px;
            top: 0;
            height: 100%;
            cursor: ew-resize;
        }
    }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SResizable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
