import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css<{active?: boolean}>`
  ${CSSProgressiveCaption01}
  color: var(--text-01);
  background-color: #FFFF;
  padding: 0.75rem 1rem;
  display: table-row;
  cursor: pointer;
  border-bottom: 1px solid var(--ui-03);
  > * {
    display: table-cell;
    padding: 0.75rem 1rem;
  }
  :hover{
    background-color: var(--hover-ui-01-1);
  }
  ${({active})  => active ? `background-color: var(--hover-ui-01-1);`: ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchDropdownSectionTableRow = styled.div<{active?: boolean}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

