import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: var(--ui-01);

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  justify-content: space-around;

  button {
    width: 100%;
    height: 44px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSetImageCardButtonsBar = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
