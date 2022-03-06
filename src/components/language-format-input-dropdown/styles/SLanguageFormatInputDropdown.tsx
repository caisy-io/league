import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const CSSOpened = css`
  border-color: var(--active-ui-03-2);
`;

const CSSDisabled = css`
  background: var(--ui-supportive-10);
  border-color: var(--ui-supportive-10);
  pointer-events: none;
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-radius: 8px;
  transition: border 200ms;
  user-select: none;
  gap: 8px;
  font-family: var(--font-families-inter);

  ${({ error }) => error && CSSError};
  ${({ opened }) => opened && CSSOpened};
  ${({ disabled }) => disabled && CSSDisabled};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
