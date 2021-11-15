import styled, { css } from "styled-components";
import { progressivePrimaryButtons } from "../../../constants/styles/design-tokens/fonts/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFlags {
  size?: number;
}

const Bronze = css<ISFlags>`
  width: ${(props) => (props.size !== undefined ? `${props.size}px` : "15px")};
  height: ${(props) => (props.size !== undefined ? `${props.size}px` : "15px")};
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    border-radius: 50%;
    ${(props) => {
      switch(props.size) {
        case 12:
          return `
          transform: scale(0.8);
          `
        case 16:
          return `
          transform: scale(1.067);
          `
        case 20:
          return `
          transform: scale(1.3333);
          `
        case 24:
          return `
          transform: scale(1.6);
          `
        case 28:
          return `
          transform: scale(1.8666);
          `
        case 32:
          return `
          transform: scale(2.1333);
          `
        case 36:
          return `
          transform: scale(2.4);
          `
        case 40:
          return `
          transform: scale(2.667);
          `
        case 48:
          return `
          transform: scale(3.2);
          `
        default: 
          return `
            transform: scale(1);
          ` 
      }
    }}
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