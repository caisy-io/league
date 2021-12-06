import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
interface ISPreview {
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
  isFlag?: boolean; 
}

const fontSize: (size: number) => number = size => {
  switch(size) {
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
    case 16:
      return 6;
    case 20:
    case 24:
    case 28:
    case 32:
      return 12;
    case 36:
      return 14;
    case 40:
    case 48:
      return 18;
    default: 
      return 12;
  }
}

const Bronze = css<ISPreview>`
  align-items: center;
  background-color: ${({ isFlag }) => !isFlag && "var(--ui-03)"};
  border-radius: ${({ isFlag }) => !isFlag && "4px"};
  color: var(--text-04);
  display: flex;
  flex-shrink: 0;
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: 700;
  height: ${({ size }) => size ? size : 32}px;
  justify-content: center;
  line-height: ${({ size }) => size ? size : 32}px;
  text-align: center;
  text-transform: uppercase;
  width: ${({ size }) => size ? size : 32}px;
  
  ${({ isFlag }) => !isFlag && `
    svg {
      width: ${({ size }) => iconSize(size)}px;
      height: ${({ size }) => iconSize(size)}px;
    }
  `}
  img {
    border-radius: 4px;
  }
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