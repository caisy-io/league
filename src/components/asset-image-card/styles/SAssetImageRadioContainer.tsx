import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  height: 40px;
  background-color: #FFFF;
  border-radius: inherit;
  display: flex;
  align-items: center;
  padding: 0.875rem;
  box-sizing: border-box;
  gap: 0.625rem;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetImageRadioContainer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;