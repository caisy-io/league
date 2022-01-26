import styled, { css } from 'styled-components';
import { CSSProgressiveBody03Semibold } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  ${CSSProgressiveBody03Semibold}
  color: var(--text-01);
  &:hover{
    background-color:var(--active-ui-01-1);
  }
  *{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SViewItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

