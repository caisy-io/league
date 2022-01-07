import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 239px;
  padding: 1rem;
  box-sizing: border-box;
  gap: 0.75rem;

  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);

  &: hover {
    background-color: var(--hover-ui-01);
  }

  &: active {
    background-color: var(--active-ui-01-1);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProfileDetailsListItem = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
