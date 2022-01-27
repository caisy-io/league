import styled, { css } from 'styled-components';
import { CSSProgressiveHighlight } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveHighlight}
  color: var(--text-04);
  text-transform: uppercase;
  background-color: var(--ui-02);
  padding: 0.75rem 1rem;
  display: table-row;
  border-bottom: 1px solid var(--ui-03);
  border-top: 1px solid var(--ui-03);
  > * {
    display: table-cell;
    padding: 0.75rem 1rem;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchDropdownSectionTableHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

