import styled, { css } from 'styled-components';
import { CSSProgressiveBody03 } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css<{active?: boolean}>`
  ${CSSProgressiveBody03}
  color: var(--text-01);
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  :hover{
    background-color: var(--hover-ui-01-1);
  }
  ${({active})  => active ? `background-color: var(--hover-ui-01-1);`: ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchDropdownSectionFulltext = styled.div<{active?: boolean}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

