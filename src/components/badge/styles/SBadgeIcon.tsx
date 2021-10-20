import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { BadgePosition } from "../BadgePosition";

interface ISBadgeIcon {
  position: BadgePosition;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const Bronze = css<ISBadgeIcon>`
  position: absolute;
  z-index: 10;
  top: 0;
  left: ${(props) => (props.position == BadgePosition.TopLeft ? "0" : "")};
  right: ${(props) => (props.position == BadgePosition.TopRight ? "0" : "")};
  transform: translateX(${(props) => (props.position == BadgePosition.TopLeft ? "-35%" : "35%")}) translateY(-35%);

  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 12px;
  text-align: center;
  padding: 0.45em;

  /* Center the text contents */
  display: ${({ disabled }) => (disabled ? "none" : "inline-flex")};
  align-items: center;
  justify-content: center;

  &:before {
    z-index: -1;
    content: "";
    /* Ensure the element is a square */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#008cff")};
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
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
