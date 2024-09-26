import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISColorLabelWrapper {
  size?: 'medium' | 'large';
  isActivated?: boolean;
}

const Bronze = css<ISColorLabelWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ size }) => size === 'medium' ? 4 : 8}px;
  div {
    background-color: ${({ isActivated }) => isActivated && 'var(--ui-01)'};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SColorLabelWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;