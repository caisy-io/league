import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  position: relative;
  width: 38px;
  height: 20px;
  display: inline-block;
  input:checked + span:before {
    transform: translateX(16px) translateY(-50%);
  }
  input + span {
    transition: all 0.5s ease;
    border: solid 1px var(--text-priority-neutral-4);
    background-color: var(--text-priority-neutral-5);
  }
  input:checked + span {
    background-color: var(--primary-500);
  }

  input:checked + span {
    border: solid 1px var(--primary-500-opacity-8);
  }
  input:focus + span,
  &:hover + span {
    box-shadow: 0 6.3px 20px 0 rgba(89, 106, 122, 0.13);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSwitch = styled.label`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
