import styled, { css } from "styled-components";
import { CSSProgressiveBody03 } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const CSSActive = css`
  background-color: var(--ui-01);
  color: var(--text-01);
`;

const Bronze = css`
  display: flex;
  align-items: center;
  ${CSSProgressiveBody03}
  background-color: var(--ui-01);
  padding: 16px;
  transition: background-color 200ms, color 200ms, border 200ms;
  color: var(--text-03);
  caret-color: var(--active-ui-03-2);
  &:hover {
    ${CSSHover}
  }

  &:active {
    ${CSSActive}
  }

  ${(props) => props.active && CSSActive}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFloatingSearchInputWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;