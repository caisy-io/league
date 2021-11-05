import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSHover = css`
  background-color: var(--hover-ui-01); 
  border: 2px solid var(--neutral-300);
`;

const CSSActive = css`
  background-color: var(--hover-ui-01); 
  border: 2px solid var(--interactional-primary-01);
  color: var(--active-text-04);
`;

const Bronze = css<ISearchBarOperandProps>`
  max-width: min-content;
  color: var(--active-ui-01);
  flex-grow: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  transition: all 0.3s ease;
  gap: 9px;
  font-size: 16px;
  font-weight: 700;
  padding: 4px;
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid var(--hover-interactional-secondary-03);

  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  ${(props) => props.active ? CSSActive : ''};

  > * {
    z-index: 10;
    position: relative;
  }
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperand = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

