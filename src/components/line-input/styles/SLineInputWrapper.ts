import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSRequired = css`
  div:last-of-type {
    opacity: 1;
  }
`;

const CSSHover = css`
  border-bottom-color: var(--hover-ui-03);

  input::placeholder {
    color: var(--hover-text-03);
  }
`;

const CSSActive = css`
  border-bottom-color: var(--active-ui-03-1);

  label {
    opacity: 1;
    color: var(--active-text-03);
  }

  div:last-of-type {
    opacity: 0;
  }
`;

const CSSSuccess = css`
  border-bottom-color: var(--ui-03);

  label {
    opacity: 1;
    color: var(--text-04);
  }

  div:last-of-type {
    opacity: 0;
  }
`;

const CSSError = css`
  border-bottom-color: var(--ui-supportive-01);

  label {
    opacity: 1;
    color: var(--text-06);
  }

  div:last-of-type {
    opacity: 0;
  }
`;

const Bronze = css`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
  border-bottom: 1px solid var(--ui-03);
  transition: border 200ms;
  padding-bottom: 3px;

  width: 100%;

  div:last-of-type {
    opacity: 0;
  }

  input::placeholder {
    color: var(--text-03);
  }

  ${(props) => props.required && CSSRequired};

  &:hover {
    ${CSSHover}
    ${(props) => props.active && CSSActive}
    ${(props) => props.state === "success" && CSSSuccess}
    ${(props) => props.state === "error" && CSSError}
  }

  &:active {
    ${CSSActive}
    ${(props) => props.state === "success" && CSSSuccess}
    ${(props) => props.state === "error" && CSSError}
  }

  ${(props) => props.active && CSSActive}
  ${(props) => props.state === "success" && CSSSuccess}
  ${(props) => props.state === "error" && CSSError}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLineInputWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
