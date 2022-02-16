import styled, {css} from 'styled-components';
import {MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND} from '../../../constants/styles';

const Bronze = css<{ value: number; max: number; min: number }>`
  
  border-radius: 61px;
  background: var(--ui-03);
  width: 106px;
  height: 4px;
  position: relative;
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    transform: scaleX(${({value, max, min}) => `${((value - min) / (max - min)) * 100}%`});
    transform-origin: left;
    height: 100%;
    background: var(--ui-04);
    border-radius: 59px;
  }
  
  :after {
    content: '';
    width: 10px;
    height: 10px;
    background: var(--ui-04);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(${({value, max, min}) => `${((((value - min) / (max - min)) * 106) / 10) * 100}%`}, -50%);
    transform-origin: left;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSlider = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

