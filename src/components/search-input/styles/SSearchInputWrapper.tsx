import styled, { css } from "styled-components";
import { CSSProgressiveBody03 } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const CSSActive = css`
  background-color: var(--ui-01);
  border-bottom-color: var(--active-ui-03-2);
  color: var(--text-01);
`;

const Bronze = css`
  display: flex;
  align-items: center;
  gap: 8px;
  ${CSSProgressiveBody03};
  background-color: var(--ui-01);
  padding: 16px;
  border-bottom: 1px solid var(--ui-03);
  transition: background-color 200ms, color 200ms, border 200ms;
  color: var(--text-03);
  text-align: left;
  &:hover {
    ${CSSHover}
  }

  &:active {
    ${CSSActive}
  }
  
  svg{
    flex-shrink: 0;
  }

  ${(props) => props.active && CSSActive}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchInputWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
