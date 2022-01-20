import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const CSSActivated = css`
  background-color: var(--active-ui-01-1);
`;

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  background-color: var(--ui-01);
  color: var(--text-01);

  padding: 12px 16px;

  cursor: pointer;

  transition: background-color 200ms;
  border-bottom: 1px solid var(--ui-03);

  display: flex;
  align-items: center;
  gap: 8px;
  *{
    flex: 0 0 auto;
  }
  
  &:hover {
    ${CSSHover}
    ${(props) => props.activated && CSSActivated}
  }

  &:active {
    ${CSSActivated}
  }

  ${(props) => props.activated && CSSActivated}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
