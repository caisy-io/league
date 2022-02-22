import styled, {css} from 'styled-components';
import {MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND} from '../../../constants/styles';

const Bronze = css`
  background: var(--ui-01);
  border: 1px solid var(--ui-03);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  height: 32px;
  max-width: fit-content;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMicroTabSwitch = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

