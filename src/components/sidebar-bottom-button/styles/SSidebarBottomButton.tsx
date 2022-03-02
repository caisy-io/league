import styled, { css } from "styled-components";
import { CSSProgressivePrimaryButtons } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Active = css`
  background-color: var(--hover-ui-01);
`;
const InActive = css`
  &:hover {
    background-color: var(--hover-ui-01);
  }
`;

const Bronze = css<{active?: boolean}>`
  width: 100%;
  border: none;
  cursor: pointer;
  ${CSSProgressivePrimaryButtons};
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
  min-height: 40px;
  background-color: var(--ui-01);
  color: var(--text-04);
  box-shadow: var(--box-shadow-sticked-bottom-ui);
  ${({ active }) => (active ? Active : InActive)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarBottomButton = styled.button<{active?: boolean}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
