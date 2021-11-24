import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IToggleProps } from "../Toggle";

const CSSSmall = css`
  width: 26px;
  height: 1rem;
`;

const Bronze = css<IToggleProps>`
  position: relative;
  width: 38px;
  height: 20px;
  display: inline-block;
  input:checked + span:before {
    transform: translateX(16px) translateY(-50%);
  }
  input + span {
    transition: all 0.5s ease;
    background-color: var(--interactional-secondary-01);
  }
  input:checked + span {
    background-color: var(--active-interactional-tertiary-02);
  } 
  
  ${(props) => props.small  ? CSSSmall : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToggle = styled.label<IToggleProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
