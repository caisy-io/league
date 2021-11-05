import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import {  ICloseButtonProps } from '../CloseButton';

const CSSCloseButtonInvisible = css`
  opacity: 0; 
`;

const Bronze = css<ICloseButtonProps>`
  opacity: 1; 
  transition: opacity ease 1s;
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
  background-color: var(--interactional-secondary-02);
  ${(props) => !props.defaultVisible && CSSCloseButtonInvisible}
  > * {
    z-index: 10;
  }
  svg {
    width: 12px;
    height: 12px;
    color: #FFFF;
    stroke-width: 2.5;
  }
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

