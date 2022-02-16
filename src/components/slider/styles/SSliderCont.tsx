import styled, {css} from 'styled-components';
import {MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND} from '../../../constants/styles';

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--icon-01);
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSliderCont = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

