import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  position: relative;
  > * {
    transition: transform ease 0.3s;
  }
  > * :nth-child(1) {
    z-index: 1;
    &:hover:not(:last-child) {
      transform: translateX(-25%);
    }
  }
  > * :nth-child(2) {
    z-index: 2;
    transform: translateX(-50%);
    &:hover:not(:last-child) {
      transform: translateX(-75%);
    }
  }
  > * :nth-child(3) {
    z-index: 3;
    transform: translateX(-100%);
    &:hover:not(:last-child) {
      transform: translateX(-125%);
    }
  }
  > * :nth-child(4) {
    z-index: 4;
    transform: translateX(-150%);
    &:hover:not(:last-child) {
      transform: translateX(-175%);
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAvatarLegacyGroup = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
