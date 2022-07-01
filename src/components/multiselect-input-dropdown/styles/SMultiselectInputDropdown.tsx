import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSActivated = css`
  border-color: var(--ui-supportive-05);
  color: var(--text-01);
`;

const CSSError = css`
  border: 1px solid var(--ui-supportive-01);
`;

const Bronze = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0.75rem;
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-radius: 0.5rem;
  transition: border 200ms;
  gap: 4px;

  cursor: pointer;

  ${(props) => props.active && CSSActivated};

  &:active {
    ${CSSActivated};
  }

  ${({ error }) => error && CSSError}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectInputDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
