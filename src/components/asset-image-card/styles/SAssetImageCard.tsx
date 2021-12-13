import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  background-color: var(--ui-01);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #E8EFF3;
  height: 228px;
  justify-content: space-between;
  width: 240px;
  &: hover{
    background-color: var(--ui-01);
    box-shadow: 0px 8px 24px rgba(184, 184, 184, 0.24);
    border: 1px solid #DDE8ED;
  }
  &: active {
    background-color: var(--ui-01);
    border: 1px solid #C3D1D9;
    box-shadow: none;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetImageCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;