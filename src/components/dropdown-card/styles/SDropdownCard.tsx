import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
background-color: var(--ui-1);
border-radius: 12px;
box-shadow: var(--box-shadow-light-pop-elevation);
width: 320px;
`;


const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDropdownCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

