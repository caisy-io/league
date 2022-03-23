import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const Bronze = css<{ value: number }>`
  border-radius: 61px;
  background: var(--ui-03);
  width: 106px;
  height: 4px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    transform: scaleX(${({ value }) => `${(value * 96) / 100 || 0}%`});
    transform-origin: left;
    height: 100%;
    background: var(--ui-04);
    border-radius: 59px;
    overflow: hidden;
  }

  :after {
    content: "";
    width: 10px;
    height: 10px;
    background: var(--ui-04);
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    pointer-events: none;
    top: 50%;
    left: 0;
    transform: translate(${({ value }) => `${(value * 96) / 100 || 0}px`}, -50%);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSlider = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
