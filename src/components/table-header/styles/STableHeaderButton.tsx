import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  background-color: var(--ui-03);
`;

const CSSPressed = css`
  background-color: var(--active-ui-03);
  color: var(--active-text-04);
`;

const CSSLockedHover = css`
  background-color: var(--hover-ui-03);
  color: var(--hover-text-04);
`;

const Bronze = css`
  display: flex;
  align-items: center;
  gap: 4px;

  background-color: transparent;
  color: var(--text-04);

  padding: 4px;
  border-radius: 4px;

  transition: background-color 200ms, color 200ms;

  line-height: 16px;

  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;

  ${(props) => props.locked && CSSHover};

  &:hover {
    ${CSSHover}
    ${(props) => props.locked && CSSLockedHover};
  }

  &:active {
    ${CSSPressed}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STableHeaderButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
