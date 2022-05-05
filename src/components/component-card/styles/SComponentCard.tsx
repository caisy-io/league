import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  background-color: var(--ui-02);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    background-color: var(--ui-01);
    box-shadow: 0px 8px 24px rgba(184, 184, 184, 0.24);
  }
  &:active {
    background-color: var(--ui-01);
    // border: 1px solid #C3D1D9;
    box-shadow: inset 0 0 0 1px #C3D1D9;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SComponentCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

