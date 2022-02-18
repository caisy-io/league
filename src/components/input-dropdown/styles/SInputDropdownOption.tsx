import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSActive = css`
  border-color: var(--ui-supportive-03);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  transition: border 200ms;
  gap: 2px;
  ${(props) => props.active && CSSActive};
  ${(props) => props.error && CSSError};
  >svg{
    flex-shrink: 0;
  }
  &:hover{
    background-color: var(--hover-ui-01);
  }
  &:active{
    background-color: var(--active-ui-01-1);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInputDropdownOption = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

