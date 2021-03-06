import styled, { css } from 'styled-components';
import { CSSProgressiveHighlightMicro } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSActivated = css`
  color: var(--text-02);
  background-color: var(--interactional-primary-01); 
`;

const Bronze = css<ISearchBarOperandProps>`
  ${CSSProgressiveHighlightMicro};  
  text-transform: uppercase;
  color: var(--text-02);
  background-color: var(--active-ui-01);
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  z-index: 0;
  padding: 0 4px;
  margin-right: 0.5rem;
  margin-left: -0.25rem;
  white-space: nowrap;
  ${(props) => props.activated ? CSSActivated : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperandEntity = styled.div<ISearchBarOperandProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

