import styled, { css } from "styled-components";
import { CSSProgressiveHighlight } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveHighlight};
  color: var(--text-04);

  display: flex;
  align-items: center;
  padding: 16px 12px;
  gap: 4px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlockEditorSidebarStatus = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
