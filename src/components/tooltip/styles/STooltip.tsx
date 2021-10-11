import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ITooltip {
  closing: boolean;
  color?: string;
}

const Bronze = css<ITooltip>`
  display: flex;
  z-index: 120;
  width: max-content;

  font-family: Inter;
  font-size: 12px;
  line-height: 1.67;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${(props) => (props.color ? props.color : "var(--neutral-600)")};
  color: var(--white-1);
  animation: ${(props) => (props.closing ? "close" : "open")} 100ms ease-in-out;

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
