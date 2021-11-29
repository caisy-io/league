import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISIconWrapper {
  size?: 'medium' | 'large';
}

const Bronze = css<ISIconWrapper>`
  color: ${(props) => props.activated ? 'var(--text-02)' : 'var(--text-04)'};
  display: flex;
  margin-right: -4px;
  margin-left: 4px;
  svg {
    width: ${(props) => props.size === 'medium' ? 16 : 20 }px;
    height: ${(props) => props.size === 'medium' ? 16 : 20 }px;
    path {
      stroke-width: 2.5;
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SIconWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;