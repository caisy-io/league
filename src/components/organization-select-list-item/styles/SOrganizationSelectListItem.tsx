import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";

const CSSActive = css`
  background-color: var(--active-ui-01-1);
`;
const Bronze = css`
  background-color: #ffff;
  border-bottom: 1px solid var(--ui-03);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 15px;
  gap: 0.75rem;
  ${({ active }) => active && CSSActive};
  width: 100%;
  overflow: hidden;

  &:hover {
    background-color: var(--hover-ui-01-1);
  }

  &:active {
    background-color: #f3f7f9;
  }

  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
