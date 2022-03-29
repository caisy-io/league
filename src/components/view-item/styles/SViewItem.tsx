import styled, { css } from "styled-components";
import {
  CSSProgressiveBody03Semibold,
  CSSProgressiveBody03,
} from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  ${CSSProgressiveBody03Semibold}
  color: var(--text-01);
  border: "1px solid";
  border-color: var(--hover-ui-01);

  &:hover {
    background-color: var(--active-ui-01-1);
  }
  * {
    display: flex;
    align-items: center;
  }
  & .title {
    margin-left: 8px;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--active-ui-01-1);
    `}

  & div:last-child > * {
    color: var(--text-04);
    width: 20px;
    height: 20px;
  }
  border: "1px solid #E8EFF3",
    ${({ isChild, active }) =>
      isChild &&
      css`
        ${CSSProgressiveBody03}
        padding-left: 40px;
        ${!active &&
        css`
          &:not(:hover) {
            & div:last-child {
              display: none;
            }
          }
        `}
      `};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SViewItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
