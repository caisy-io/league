import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 112px;
  height: 112px;

  justify-content: center;
  align-items: center;

  background-color: var(--ui-04);
  box-shadow: var(--box-shadow-snackbar);
  border-radius: 8px;
  overflow: hidden;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: var(--ui-01);

  * {
    width: 100%;
    height: 100%;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAvatarInputPreview = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
