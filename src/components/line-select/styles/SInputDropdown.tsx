import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSActive = css`
  border-color: var(--ui-supportive-03);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const CSSOpened = css`
  border-bottom: 1px solid var(--active-text-03);
`;

const CSSNormal = css`
  &:after{
    display: none;
  }
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  width: 280px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  transition: border 200ms;
  gap: 2px;
  ${(props) => props.active && CSSActive};
  ${(props) => props.error && CSSError};
  ${(props) => props.opened ? CSSOpened : ''};  
  >svg{
    flex-shrink: 0;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInputDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

