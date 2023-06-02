import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 13px 16px 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--ui-03);
  transition: background-color 0.3s ease-in-out;

&:hover, &:focus, &:active {
  background-color: var(--hover-ui-01);
}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SUserDropdownOption = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
