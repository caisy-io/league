import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  padding: 4px 6px;
  border-radius: 6px;
  background-color: var(--interactional-secondary-08);
  cursor: pointer;
  transition: background-color 200ms;
  width: fit-content;
  ${CSSProgressiveBody03Medium};
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-01);

  &:hover {
    background-color: var(--hover-interactional-secondary-08);
  }

  &:active {
    background-color: var(--active-interactional-secondary-08);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
