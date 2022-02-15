import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSOpened = css`
  background-color: var(--active-ui-01-1);
`;

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const Bronze = css`
  ${CSSProgressiveBody03Semibold};
  color: var(--text-01);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: var(--ui-01);
  transition: background-color 150ms;

  cursor: pointer;

  &:hover {
    ${CSSHover}
    ${(props) => props.opened && CSSOpened}
  }

  ${(props) => props.opened && CSSOpened}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STranslationMenuHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
