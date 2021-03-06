import styled, { css } from "styled-components";
import { CSSProgressiveBody03 } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  outline: none;
  border: none;
  ${CSSProgressiveBody03}
  background-color: transparent;
  color: var(--text-01);
  flex-grow: 1;
  max-width: 100%;
  min-width: 2px;
  &::placeholder {
    color: var(--text-03);
  }
  display: flex;
  overflow: hidden;
  max-width: 200px;
  text-align: left;
  padding: 6px 8px;
  white-space: nowrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFloatingSearchEditableText = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
