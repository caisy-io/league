import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISResizableWrapper {
    width: string;
    height: string;
    left?: boolean;
}

const Bronze = css<ISResizableWrapper>`
  position: relative;
  overflow: auto;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SResizableWrapper = styled.div.attrs(({ width, height }) => ({
  style: {
    width, height
  }
}))`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
