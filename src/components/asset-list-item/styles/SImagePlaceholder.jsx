import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--ui-02);
    border: 1px solid #E8EFF3;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SImagePlaceholder = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

