import styled, { css } from "styled-components";
import { CSSProgressiveHighLight } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveHighLight};
  background-color: var(--ui-02);
  border-bottom: 1px solid var(--ui-03);
  color: var(--text-04);
  width: fit-content;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STableHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
