import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
width: 300px;
height: 300px;
background-color: #FFFFFF;
overflow-y: scroll;
::-webkit-scrollbar {
  background-color: #FFFF;
  border-right: 1px solid #E8EFF3;
  border-left: 1px solid #E8EFF3;
  width: 10px;
  box-sizing: border-box;
  -webkit-box-shadow: outset 0 0 6px rgba(0,0,0,0.3); 
}
::-webkit-scrollbar-thumb  {
  background: var(--interactional-secondary-08);
  border-radius: 49px;
  border: 2px solid #FFFF;
  box-sizing: border-box;
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

