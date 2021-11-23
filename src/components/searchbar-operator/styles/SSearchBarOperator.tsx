import styled, { css } from "styled-components";
import { CSSProgressiveHighlightMicro } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";
import { ISearchBarOperatorProps } from "../SearchBarOperator";

const CSSHover = css`
  background-color: var(--hover-ui-03);
  color: var(--hover-text-04);
  cursor: pointer;
`;

const CSSActive = css`
  background-color: white;
  color: var(--ui-supportive-03);
  outline: 1px solid var(--ui-supportive-03);
  outline-offset: -1px;
`;

const Bronze = css<ISearchBarOperatorProps>`
  ${CSSProgressiveHighlightMicro};
  color: var(--text-04);
  text-transform: uppercase;
  max-width: min-content;
  height: 1.3 rem;
  box-sizing: border-box;
  background-color: var(--ui-03);
  border-radius: 68px;
  padding: 4px 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  z-index: 1;
  ${(props) => (props.hover ? CSSHover : "")};
  :hover {
    ${CSSHover}
  }
  &,
  &:hover {
    ${(props) => (props.activated ? CSSActive : "")};
  }
  :active {
    ${CSSActive}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperator = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
