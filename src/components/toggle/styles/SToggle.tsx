import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSSmall = css`
  width: 28px;
  height: 16px;
`;

const Bronze = css`
  background-color: ${(props) =>
    props.activated ? "var(--active-interactional-tertiary-02);" : "var(--interactional-secondary-01);"};
  border-radius: 23.1px;
  width: 32px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;

  transition: background-color 200ms;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--active-interactional-tertiary-02);
  }

  ${(props) => props.size === "small" && CSSSmall}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToggle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
