import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDrawer {
  open: boolean;
  closing: boolean;
  animationTime: number;
  transparentMask: boolean | undefined;
  top: string | number | undefined;
}

const Bronze = css<ISDrawer>`
  position: fixed;
  top: ${(props) => props.top || 0};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  &::after {
    z-index: -1;
    inset: 0;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.transparentMask ? "rgba(0, 0, 0, 0.4)" : "transparent")};
    opacity: 0;
    animation: ${(props) => props.transparentMask && (props.closing ? "BackgroundOut " : "BackgroundIn ")}
      ${(props) => props.animationTime}ms forwards;
    will-change: opacity;

    @keyframes BackgroundIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes BackgroundOut {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDrawer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
