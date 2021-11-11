import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { EBadgePosition } from "../BadgePosition";

interface ISBadgeIcon {
  position: EBadgePosition;
  disabled?: boolean;
  height: number;
}

const Bronze = css<ISBadgeIcon>`
  position: absolute;

  z-index: 10;
  top: ${(props) => `-${props.height / 2}px`};
  ${(props) => (props.position == EBadgePosition.TopLeft ? `left: -${props.height / 2}px` : "")};
  ${(props) => (props.position == EBadgePosition.TopRight ? `right: -${props.height / 2}px` : "")};

  color: var(--ui-01);
  font-size: 9px;
  font-weight: 700;
  text-align: center;
  padding: 4.5px;

  /* Center the text contents */
  display: ${({ disabled }) => (disabled ? "none" : "inline-flex")};
  align-items: center;
  justify-content: center;
  background-color: var(--ui-supportive-01);
  border-radius: 50%;
  height: ${(props) => props.height}px;
  width: fit-content;
  aspect-ratio: 1;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBadgeIcon = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
