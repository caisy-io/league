import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSSmall = css`
  height: 12px;
  width: 12px;
  right: ${(props) => (props.activated ? "2px" : "14px")};
`;

const Bronze = css`
  background-color: var(--ui-01);
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  right: ${(props) => (props.activated ? "3px" : "15px")};

  transition: right 200ms;

  ${(props) => props.size === "small" && CSSSmall}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToggleCircle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
