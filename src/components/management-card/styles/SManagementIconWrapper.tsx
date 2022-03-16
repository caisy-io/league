import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: var(--ui-02);
  border-radius: 4px;
  color: var(--icon-09);

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SManagementIconWrapper = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
