import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  opacity: 1; 
  transition: opacity ease 0.3s;
  cursor: pointer;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100px;
  outline: 2px solid #FFFF;
  position: absolute;
  top: -6px;
  right: -6px;
  svg {
    width: 12px;
    height: 12px;
    color: #FFFF;
    strokeWidth: 2.5;
  }
  background-color: var(--hover-interactional-secondary-02);
  `;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCloseButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

