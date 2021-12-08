import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISImageWrapper {
  size?: 'medium' | 'large';
}

const Bronze = css<ISImageWrapper>`
  width: ${({ size }) => size === 'medium' ? 20 : 30}px;
  height: ${({ size }) => size === 'medium' ? 20 : 30}px;
  margin: ${({ size }) => size === 'medium' ? '0 8px 0 -4px' : '-3px 8px -3px -6px'};
  img {
    border-radius: 4px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SImageWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;