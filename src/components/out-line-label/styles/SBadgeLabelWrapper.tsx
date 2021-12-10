import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISBadgeLabelWrapper {
  size?: 'medium' | 'large';
  isActivated?: boolean;
}

const Bronze = css<ISBadgeLabelWrapper>`
  div {
    background-color: ${({ isActivated }) => isActivated && 'var(--ui-01)'};
    color: ${({ isActivated }) => isActivated ? 'var(--interactional-primary-01)' : 'var(--text-04)'};
    font-weight: 600;
    font-size: ${({ size }) => size === 'medium' ? 10 : 12}px;
    width: ${({ size }) => size === 'medium' && 16}px;
    height: ${({ size }) => size === 'medium' && 16}px;
    line-height: 16px;
    margin: ${({ size }) => size === 'medium' ? '0 -2px 0 4px' : '0 -4px 0 8px'};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBadgeLabelWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;