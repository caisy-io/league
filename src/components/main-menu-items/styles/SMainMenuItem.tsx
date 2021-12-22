import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISMainMenuItem {
  activated?: boolean;
}

const CSSActive = css`
  background-color: var(--active-ui-01);
  color: var(--ui-01);

  svg {
    path {
      stroke: var(--ui-01);
    }
  }
`;

const Bronze = css<ISMainMenuItem>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--ui-01);
  color: var(--icon-04);
  border-radius: 8px;
  height: 32px;
  width: 32px;

  transition: color 200ms, background-color 200ms;

  &:hover {
    background-color: var(--hover-ui-01);
    color: var(--hover-icon-04);
    svg {
      path {
        stroke: var(--hover-icon-04);
      }
    }
  }

  &:active {
    ${CSSActive}
  }

  ${(props) => props.activated && CSSActive}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMainMenuItem = styled.button<ISMainMenuItem>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
