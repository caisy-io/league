import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISPoppableWrapper {
}

const Bronze = css<ISPoppableWrapper>`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .dashed-rectangle {
        position: fixed;
        user-select: none;
        box-sizing: border-box;
        width: 250px;
        height: 250px;

        &::after {
            content: attr(title);
            position: absolute;
            top: -20px;
            font-size: 13px;
            left: 0;
        }
    }
`;

const Silver = css<ISPoppableWrapper>``;

const Gold = css<ISPoppableWrapper>``;

const Platinum = css<ISPoppableWrapper>``;

const Diamond = css<ISPoppableWrapper>``;

export const SPoppableWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
