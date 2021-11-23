import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFlags {
  size?: 12 | 16 | 20 | 28 | 32 | 36 | 40 | 48;
}

const Bronze = css<ISFlags>`
  width: ${(props) => (props.size !== undefined ? props.size : 40)}px;
  height: ${(props) => (props.size !== undefined ? props.size : 40)}px;
  min-width: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    border-radius: 50%;
    transform: scale(${(props) => {
      switch(props.size) {
        case 12:
          return 0.8;
        case 16:
          return 1.067;
        case 20:
          return 1.3333;
        case 24:
          return 1.6;
        case 28:
          return 1.8666;
        case 32:
          return 2.1333;
        case 36:
          return 2.4;
        case 40:
          return 2.667;
        case 48:
          return 3.2;
        default: 
          return 2.667;
      }
    }});
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFlags = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;