import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighlight } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { ISearchBarOperatorBadgeSelectProps } from "../SearchBarOperatorBadgeSelect";

const CSSHover = css`
  background-color: var(--hover-ui-03);
  color: var(--hover-text-04);
  cursor: pointer;
`;

const CSSActivated = css`
  background-color: var(--active-ui-03-2);
  color: #ffff;
`;

const Bronze = css<ISearchBarOperatorBadgeSelectProps>`
  ${CSSProgressiveHighlight};
  line-height: 16px;
  color: var(--text-04);
  text-transform: uppercase;
  max-width: min-content;
  background-color: var(--ui-03);
  border-radius: 68px;
  padding: 4px 8px;

  transition: background-color 0.3s ease, color 0.3s ease;
  ${(props) => props.activated && CSSActivated};
  :hover {
    ${CSSHover}
  }

  &:hover {
    ${(props) => (props.activated ? CSSActivated : "")};
  }
  &:active {
    ${CSSActivated}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperatorBadgeSelect = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
