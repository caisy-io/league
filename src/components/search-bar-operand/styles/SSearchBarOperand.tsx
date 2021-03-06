import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Semibold } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSHover = css`
  border: 1px solid var(--hover-interactional-secondary-03);
  background-color: var(--hover-ui-01); 
`;

const CSSActivated = css`
  color: var(--active-text-04);
  border: 1px solid var(--interactional-primary-01);
  background-color: var(--hover-ui-01); 
`;

const Bronze = css<ISearchBarOperandProps>`
  height: 28px;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.5rem;
  position: relative;
  z-index: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  padding: 0.375rem 0.5rem;
  box-sizing: border-box;
  background-color: #FFFF;
  border: 1px solid var(--hover-interactional-secondary-03);
  ${CSSProgressiveCaption01Semibold};
  color: var(--active-ui-01);
  white-space: nowrap;
  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  &, &:hover{
    ${(props) => props.activated ? CSSActivated : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperand = styled.div<ISearchBarOperandProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

