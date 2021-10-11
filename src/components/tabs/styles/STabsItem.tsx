import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSTabsItemSelected } from "./CSSTabsItemSelected";

const Bronze = css`
  display: inline-block;
  margin-left: 0;
  padding: 0 10px;
  transition: all 0.5s;
  cursor: pointer;
  color: var(--neutral-500);
  font-weight: 500;

  &:hover {
    color: var(--primary-500);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STabsItem = styled.li<{ selected: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${(props) => (props.selected ? CSSTabsItemSelected : "")}
`;
