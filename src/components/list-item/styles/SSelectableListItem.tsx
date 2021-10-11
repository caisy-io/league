import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { SListItem } from "./SListItem";

interface ISSelectableListItem {
  selected: boolean;
}

const Bronze = css<ISSelectableListItem>`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  gap: 16px;

  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: var(--primary-500-opacity-8);
    ${(props) => props.selected && "background-color: var(--primary-500);"}
  }

  ${(props) => props.selected && "background-color: var(--primary-500);"}
`;

const Silver = css<ISSelectableListItem>``;

const Gold = css<ISSelectableListItem>``;

const Platinum = css<ISSelectableListItem>``;

const Diamond = css<ISSelectableListItem>``;

export const SSelectableListItem = styled(SListItem)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
