import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const CSSActivated = css`
  background-color: var(--ui-01);
`;

const Bronze = css`
  position: relative;

  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  cursor: pointer;

  transition: background-color 150ms;

  &:hover {
    ${CSSHover}
  }

  &:active {
    ${CSSActivated}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SComponentListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
