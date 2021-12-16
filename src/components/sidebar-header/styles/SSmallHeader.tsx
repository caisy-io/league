import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  border-bottom: 1px solid var(--ui-03);
  color: var(--text-01);
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  svg{
    flex-shrink: 0;
  }
  ${({styleOverwrite}) => styleOverwrite ?? ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSmallHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

