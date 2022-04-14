import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  > div > div:last-child {
    opacity: 1;
    pointer-events: all;
  }
`;

const Bronze = css<{ closeable: boolean; activated: boolean }>`
  > div > div:last-child {
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  ${({ activated, closeable }) => (closeable && activated ? `${CSSHover}` : "")}
  :active,
  :hover {
    ${({ closeable }) => (closeable ? `${CSSHover}` : "")}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperandWrapper = styled.div<{ closeable: boolean; activated: boolean; styleOverwrite?: any }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({styleOverwrite}) => styleOverwrite ?? ''};
`;
