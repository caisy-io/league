import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";

const CSSActive = css`
  background-color: var(--active-ui-01-1);
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 16px;
  box-sizing: border-box;
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  transition: border 200ms;
  gap: 12px;

  :last-of-type {
    border: none;
  }

  ${({ active }) => active && CSSActive};

  &:hover {
    background-color: var(--hover-ui-01);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdownOption = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
