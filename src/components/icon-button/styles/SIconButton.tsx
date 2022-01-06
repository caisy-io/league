import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSSmall = css`
  height: 32px;
  width: 32px;
`;

const CSSMedium = css`
  height: 36px;
  width: 36px;
`;

const CSSPrimaryActivated = css`
  background-color: var(--interactional-secondary-03);
  color: var(--active-icon-01);
`;

const CSSPrimary = css`
  color: var(--icon-01);
  background-color: var(--interactional-secondary-08);

  ${(props) => props.activated && CSSPrimaryActivated}

  &:hover {
    color: var(--hover-icon-01);
    background-color: var(--hover-interactional-secondary-08);
    ${(props) => props.activated && CSSPrimaryActivated}
  }

  &:active {
    color: var(--active-icon-01-2);
    background-color: var(--active-interactional-secondary-08);
    ${(props) => props.activated && CSSPrimaryActivated}
  }
`;

const CSSSecondaryActivated = css`
  background-color: var(--hover-interactional-secondary-08);
  color: var(--active-icon-01);
`;

const CSSSecondary = css`
  color: var(--icon-01);
  background-color: transparent;
  border: 1px solid var(--interactional-secondary-08);
  ${(props) => props.activated && CSSSecondaryActivated}

  &:hover {
    color: var(--hover-icon-01);
    background-color: var(--hover-interactional-secondary-08);
    border: none;
    ${(props) => props.activated && CSSSecondaryActivated}
  }

  &:active {
    color: var(--active-icon-01-2);
    background-color: var(--active-interactional-secondary-08);
    border: none;
    ${(props) => props.activated && CSSSecondaryActivated}
  }
`;

const CSSDangerActivated = css`
  background-color: var(--active-interactional-secondary-06);
  color: var(--activated-icon-02-1);
`;

const CSSDanger = css`
  color: var(--icon-02);
  background-color: var(--interactional-secondary-02);
  border-radius: 6px;
  ${(props) => props.activated && CSSDangerActivated}

  &:hover {
    color: var(--hover-icon-02);
    background-color: var(--hover-interactional-secondary-02);
    ${(props) => props.activated && CSSDangerActivated}
  }

  &:active {
    color: var(--active-icon-02);
    background-color: var(--active-interactional-secondary-02);
    ${(props) => props.activated && CSSDangerActivated}
  }
`;

const Bronze = css`
  border-radius: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  transition: background-color 150ms, color 150ms;

  ${CSSPrimary}

  ${(props) => props.size === "small" && CSSSmall}
  ${(props) => props.size === "medium" && CSSMedium}
  ${(props) => props.type === "danger" && CSSDanger}
  ${(props) => props.type === "secondary" && CSSSecondary}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SIconButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
