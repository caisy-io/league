import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
interface ISPreview {
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
  isFlag?: boolean; 
  styleOverwrite?: any;
}

const fontSize: (size: number) => number = size => {
  switch(size) {
    case 12:
    case 16:
      return 6;
    case 20:
      return 7;
    case 24:
      return 8;
    case 28:
    case 32:
      return 9;
    case 36:
    case 40:
    case 48:
      return 10;
    default: 
      return 9;
  }
};

const iconSize: (size: number) => number = size => {
  switch(size) {
    case 12:
    case 16:
      return 8;
    case 20:
    case 24:
    case 28:
    case 32:
      return 17.14;
    case 36:
      return 17.24;
    case 40:
    case 48:
      return 21.18;
    default: 
      return 16;
  }
};

const iconStroke: (size: number) => number = size => {
  switch(size) {
    case 12:
    case 16:
    case 20:
    case 24:
    case 28:
      return 1.2;
    case 32:
    case 36:
      return 1.5;
    case 40:
    case 48:
      return 1.8;
    default: 
      return 1.2;
  }
}; 
const borderRadius: (size: number) => number = size => {
  switch(size) {
    case 12:
    case 16:
      case 20:
      return 3;
    case 24:
      return 4;
    case 28:
    case 32:
    case 36:
    case 40:
      return 6;
    case 48:
      return 8;
    default: 
      return 4;
  }
}; 

const Bronze = css<ISPreview>`
  align-items: center;
  background-color: ${({ isFlag }) => !isFlag && "var(--ui-03)"};
  border-radius: ${({ isFlag, size }) => !isFlag && borderRadius(size)}px;
  color: var(--text-04);
  display: flex;
  flex-shrink: 0;
  font-size: ${({ size }) => size && fontSize(size)}px;
  font-weight: 700;
  height: ${({ size }) => size ? size : 32}px;
  justify-content: center;
  line-height: ${({ size }) => size ? size : 32}px;
  text-align: center;
  text-transform: uppercase;
  width: ${({ size }) => size ? size : 32}px;
  
  ${({ isFlag, size }) => !isFlag && `
    svg {
      width: ${size && iconSize(size)}px;
      height: ${size && iconSize(size)}px;
      path {
        stroke-width: ${size && iconStroke(size)}px;
      } 
    }
  `}
  img {
    border-radius: 4px;
    width: 100%;
  }
  ${({styleOverwrite}) => styleOverwrite ?? ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPreview = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;