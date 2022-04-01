import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../..";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ITooltip {
  animation: any;
  color: string;
}

export const CSSOpenAnimation = css`
  animation: open 100ms ease-in-out;

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CSSTooltipBlack = css`
  background-color: var(--ui-overlay-02);
  color: var(--text-02);
`;

export const CSSTooltipWhite = css`
  background-color: var(--ui-01);
  color: var(--text-01);
`;

const Bronze = css<ITooltip>`
  ${CSSProgressiveCaption01Semibold}
  display: flex;
  z-index: 120;
  width: max-content;
  position: relative;

  border-radius: 4px;
  ${(props) => (props.color === "black" ? CSSTooltipBlack : CSSTooltipWhite)}
  padding: 8px;

  box-shadow: var(--box-shadow-sticked-top-ui);

  ${CSSOpenAnimation}

  &:after {
    content: "";
    position: absolute;
    bottom: -18px;
    left: -18px;
    right: -18px;
    top: -18px;
    z-index: -1;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STooltip = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
