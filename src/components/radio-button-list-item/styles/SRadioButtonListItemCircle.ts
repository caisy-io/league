import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSDisabled = css`
  color: var(--disabled-icon);
  svg {
    path {
      stroke: var(--disabled-icon);
    }
  }
`;

const CSSHover = css`
  color: var(--hover-icon-01);
`;

const CSSActivated = css`
  color: var(--active-icon-01);
`;


const CSSLeft = css`
  order: -1000;
`;

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--icon-01);
  cursor: pointer;

  ${(props) => props.hover && CSSHover}
  ${(props) => props.activated && CSSActivated}
  ${(props) => props.disabled && CSSDisabled}
  ${(props) => props.left && CSSLeft}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SRadioButtonListItemCircle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
