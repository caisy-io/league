import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
overflow-y: scroll;
::-webkit-scrollbar {
  background-color: #FFFF;
  border-right: 1px solid #E8EFF3;
  border-left: 1px solid #E8EFF3;
  width: 0.75rem;
  box-sizing: border-box;
}
::-webkit-scrollbar-thumb  {
  background: var(--interactional-secondary-08);
  border: 3px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 49px;
  background-color: rgba(0, 0, 0, 0.15);
 }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SScrollbar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

