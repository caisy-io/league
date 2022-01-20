import styled, { css } from "styled-components";
import { CSSProgressiveHighlightMicro } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  align-items: center;
  gap: 4px;

  ${CSSProgressiveHighlightMicro};
  line-height: unset;
  color: var(--text-02);
  background-color: var(--ui-supportive-01);
  text-transform: uppercase;

  border-radius: 4px;
  padding: 4px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBulkSelectionSnackbarErrors = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
