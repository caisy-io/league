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
    "border: solid 1px var(--interactional-primary-01); background-color: var(--disabled-interactional-01);"}

  ${(props) => props.selected && "border: solid 1px var(--ui-01); background-color: var(--interactional-primary-01);"}

    svg {
    height: 14px;
    width: 14px;
    path {
      // fill: var(--ui-01);
      stroke: var(--ui-01);
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
