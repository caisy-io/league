import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: var(--ui-01);
  box-shadow: var(--box-shadow-right-sidebar);
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--ui-03);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlockEditorSidebar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
