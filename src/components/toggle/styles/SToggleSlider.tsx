import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSSmall = css`
  width: 10px;
  height: 10px;
`;

const Bronze = css`
  display: inline-block;
  border-radius: 15rem;
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  background-color: var(--text-priority-neutral-5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.4s ease;
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
    ${(props) => props.small  ? CSSSmall : ''};
  }
  &:hover{
    background-color: var(--active-interactional-tertiary-02);
  }
  &:active{
    background-color: var(--active-interactional-tertiary-02);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToggleSlider = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
