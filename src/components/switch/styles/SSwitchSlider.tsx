import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: inline-block;
  border-radius: 15rem;
  position: absolute;
  cursor: pointer;
  width: 38px;
  height: 20px;
  border-radius: 19px;
  border: solid 1px var(--text-priority-neutral-4);
  background-color: var(--text-priority-neutral-5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s ease;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    margin: 0;
    padding: 0;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    transition: 0.4s;
    cursor: pointer;
    border-radius: 50px;
    width: 14px;
    height: 14px;
    background-color: var(--ui-01);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSwitchSlider = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
