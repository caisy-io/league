import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItemTitle {
  hovering?: boolean;
  selected?: boolean;
}

const Bronze = css<ISListItemTitle>`
  font-family: Inter;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.45;
  text-align: left;
  color: var(--text-priority-neutral-2);
  ${(props) => props.hovering && "color: var(--interactional-primary-01);"}
  ${(props) => props.selected && "color: var(--ui-01);"}
`;

const Silver = css<ISListItemTitle>``;

const Gold = css<ISListItemTitle>``;

const Platinum = css<ISListItemTitle>``;

const Diamond = css<ISListItemTitle>``;

export const SListItemTitle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
