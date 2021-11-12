import styled, { css } from 'styled-components';
import { ProgressiveCaption01Semibold } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSHover = css`
  border: 1px solid var(--neutral-300);  
  background-color: var(--hover-ui-01); 
`;

const CSSActivated = css`
  color: var(--active-text-04);
  border: 1px solid var(--interactional-primary-01);
  background-color: var(--hover-ui-01); 
`;

const Bronze = css<ISearchBarOperandProps>`
  ${ProgressiveCaption01Semibold};
  max-width: min-content;
  height: 28px;
  color: var(--active-ui-01);
  flex-grow: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  gap: 9px;
  padding: 4px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid var(--hover-interactional-secondary-03);
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

