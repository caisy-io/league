import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDrawerContent {
  width: string;
  placement: "left" | "right";
  open: boolean;
  closing: boolean;
  animationTime: number;
}

const Bronze = css<ISDrawerContent>`
  position: absolute;
  pointer-events: all;
  top: 0;
  ${(props) => props.placement}: 0;
  width: ${(props) => props.width || "min-content"};
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  background-color: #f3f5f8;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${(props) => (props.closing ? "LoadOut " : "LoadIn ")} ${(props) => props.animationTime}ms forwards;
  will-change: transform;

  @keyframes LoadIn {
    0% {
      transform: ${(props) => (props.placement === "right" ? "translateX(100%)" : "translateX(-100%)")};
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes LoadOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${(props) => (props.placement === "right" ? "translateX(100%)" : "translateX(-100%)")};
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDrawerContent = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
