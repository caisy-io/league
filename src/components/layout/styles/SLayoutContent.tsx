import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  position: relative;
  order: 2;
  flex-grow: 1;
  overflow: auto;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutContent = styled.div.attrs(({ width }) => ({
  style: {
    width,
  },
}))`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }: { styleOverwrite: any }) => styleOverwrite ?? ""};
`;
