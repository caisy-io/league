import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

export interface ISLayoutMainNav {
    width: number;
}

const Bronze = css` 
    display: flex;
    flex-direction: column;
    width: ${(props: ISLayoutMainNav) => props.width ? (props.width + "px") : "70px"};
    min-width: ${(props: ISLayoutMainNav) => props.width ? (props.width + "px") : "70px"};
    height: 100%;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutMainNav = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
