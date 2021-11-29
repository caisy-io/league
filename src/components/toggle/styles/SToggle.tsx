import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IToggleProps } from "../Toggle";

const CSSSmall = css`
  width: 1.625rem;
  height: 1rem;
  input:checked + span:before {
    transform: translateX(0.5rem) translateY(-50%);
  }
`;

const Bronze = css<IToggleProps>`
  position: relative;
  width: 2.375rem;
  height: 1.25rem;
  display: inline-block;
  input:checked + span:before {
    transform: translateX(1rem) translateY(-50%);
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
