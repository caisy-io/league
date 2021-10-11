import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISSelectableListItemCheckbox {
  selected: boolean;
  hovering: boolean;
}

const Bronze = css<ISSelectableListItemCheckbox>`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: solid 1px var(--text-priority-neutral-4);
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.hovering &&
    "border: solid 1px var(--action-primary-default); background-color: var(--action-primary-disabled);"}

  ${(props) => props.selected && "border: solid 1px var(--white-1); background-color: var(--primary-500);"}

    svg {
    height: 14px;
    width: 14px;
    path {
      // fill: var(--white-1);
      stroke: var(--white-1);
    }
  }
`;

const Silver = css<ISSelectableListItemCheckbox>``;

const Gold = css<ISSelectableListItemCheckbox>``;

const Platinum = css<ISSelectableListItemCheckbox>``;

const Diamond = css<ISSelectableListItemCheckbox>``;

export const SSelectableListItemCheckbox = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
