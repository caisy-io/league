import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSActivated = css`
  border-color: var(--ui-supportive-05);
  color: var(--text-01);
`;

const Bronze = css`
  width: 100%;

  padding: 0.75rem;
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-radius: 0.5rem;
  transition: border 200ms;
  gap: 2px;

  cursor: pointer;

  ${(props) => props.active && CSSActivated};

  &:active {
    ${CSSActivated};
  }
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
