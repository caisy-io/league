import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSActive = css`
  border-color: var(--ui-supportive-03);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  width: 320px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 10px 12px;
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
    background-color: var(--ui-02);
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

