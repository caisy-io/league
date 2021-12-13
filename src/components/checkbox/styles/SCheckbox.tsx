import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
input[type="checkbox"] {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  span {
    display: inline-block; 
    height: 20px;
    width: 20px;
    background: #fff;
    border: 2px #ddd solid;
    margin-right: 4px;
  }
  .checkbox--active {
    border-color: purple;
    background: purple;
  }
}`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCheckbox = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

