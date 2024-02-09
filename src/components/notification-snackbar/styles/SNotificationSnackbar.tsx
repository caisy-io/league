import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const CSSError = css`
  background-color: var(--ui-supportive-01);
`;

const Bronze = css<{ styleOverwrite?: any; exit?: boolean; error?: any }>`
  background-color: rgba(0, 0, 0, 0.74);
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2.5rem;
  width: 28.375rem;
  padding: 0.75rem;
  box-sizing: border-box;
  margin-top: 1.25rem;
  z-index: 2;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.14);

  svg {
    color: #ffff;
    margin-right: 0.625rem;
    width: 1rem;
    height: 1rem;
  }

  ${(props) => (props.error ? CSSError : "")};

  ${({ styleOverwrite }) => (styleOverwrite ? styleOverwrite : "")};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationSnackbar = styled.div<{ styleOverwrite?: any; exit?: boolean; error?: any }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
