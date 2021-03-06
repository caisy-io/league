import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSOpened = css`
  border-color: var(--active-ui-03-2);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  width: 280px;
  cursor: pointer;
  padding: 0.25rem 0.25rem 0.25rem 0;
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  transition: border 200ms;
  display: flex;
  justify-content: space-between;
  gap: 2px;
  ${(props) => props.opened && CSSOpened};
  ${(props) => props.error && CSSError};
  >svg{
    flex-shrink: 0;
  }
  &:hover{
    color: var(--hover-text-03);
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

