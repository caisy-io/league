import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItemAvatar {
  selected?: boolean;
  hovering?: boolean;
}

const Bronze = css<ISListItemAvatar>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: solid 1px var(--text-priority-neutral-5);
  ${(props) => props.hovering && "border: solid 1px var(--action-primary-default);"}
  ${(props) => props.selected && "border: solid 1px var(--white-1);"}
`;

const Silver = css<ISListItemAvatar>``;

const Gold = css<ISListItemAvatar>``;

const Platinum = css<ISListItemAvatar>``;

const Diamond = css<ISListItemAvatar>``;

export const SListItemAvatar = styled.img`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
