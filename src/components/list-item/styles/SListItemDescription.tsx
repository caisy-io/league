import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItemDescription {
  hovering?: boolean;
  selected?: boolean;
}

const Bronze = css<ISListItemDescription>`
  font-family: Inter;
  font-size: 11px;
  line-height: 1.45;
  text-align: left;
  color: var(--text-priority-neutral-4);
  ${(props) => props.hovering && "color: var(--action-primary-default);"}
  ${(props) => props.selected && "color: var(--white-1);"}
`;

const Silver = css<ISListItemDescription>``;

const Gold = css<ISListItemDescription>``;

const Platinum = css<ISListItemDescription>``;

const Diamond = css<ISListItemDescription>``;

export const SListItemDescription = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
