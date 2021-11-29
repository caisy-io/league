import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISBadgeLabelWrapper {
  size: 'medium' | 'large';
  activated: boolean;
}

const Bronze = css<ISBadgeLabelWrapper>`
  div {
    background-color: ${(props) => props.activated && 'var(--ui-01)'};
    color: ${(props) => props.activated ? 'var(--interactional-primary-01)' : 'var(--text-04)'};
    font-weight: 600;
    font-size: ${(props) => props.size === 'medium' ? 10 : 12}px;
    width: ${(props) => props.size === 'medium' && 16}px;
    height: ${(props) => props.size === 'medium' && 16}px;
    line-height: 16px;
    margin: ${(props) => props.size === 'medium' ? '0 -2px 0 4px' : '0 -4px 0 8px'};
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