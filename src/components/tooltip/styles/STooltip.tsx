import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ITooltip {
  closing: boolean;
  backgroundColor: string;
  color: string;
}

const CSSBlack = css`
  background-color: var(--ui-overlay-02);
  color: var(--text-02);
`;

const CSSWhite = css`
  background-color: var(--ui-01);
  color: var(--text-01);
`;

const Bronze = css<ITooltip>`
  display: flex;
  z-index: 120;
  width: max-content;

  border-radius: 4px;
  ${(props) => (props.color === "black" ? CSSBlack : CSSWhite)}
  animation: ${(props) => (props.closing ? "close" : "open")} 100ms ease-in-out;
  padding: 16px;

  box-shadow: var(--box-shadow-sticked-top-ui);

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes close {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
