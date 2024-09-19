import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighlightSmallBadges } from "../../../constants/styles";

const Bronze = css`
  width: 16px;
  height: 16px;
  background-color: var(--ui-supportive-01);
  border-radius: 24px;
  text-align: center;
  ${CSSProgressiveHighlightSmallBadges};
  color: var(--text-02);
  margin-right: 6px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLineTabErrorsCountBadge = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
