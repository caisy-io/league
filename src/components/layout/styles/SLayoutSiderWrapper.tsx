import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { Z_INDEX } from "../../../constants/styles/z-index-numbers";

interface ISLayoutSiderWrapper {
  left: boolean;
  styleOverwrite?: any;
}

const Bronze = css<ISLayoutSiderWrapper>`
  position: relative;
  display: flex;
  order: ${(props) => (props.left ? 1 : 3)};
  z-index: ${Z_INDEX.LAYOUT_SIDER};
  box-shadow: var(--box-shadow-left-sidebar);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutSiderWrapper = styled.div<ISLayoutSiderWrapper>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
