import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { CSSProgressiveHighlight } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: var(--ui-01);

  gap: 8px;

  ${CSSProgressiveHighlight};
  color: var(--text-03);
  text-transform: uppercase;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SManagementBlockTitle = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
