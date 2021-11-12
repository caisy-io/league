import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ProgressiveHighLight } from "../../../constants/styles/fonts";

interface ISAvatar {
  size?: 16 | 20 | 24 | 28 | 32;
}

const Bronze = css<ISAvatar>`
  ${ProgressiveHighLight};
  border-radius: 4px;
  letter-spacing: 0;
  ${(props) => {
    switch(props.size) {
      case 16:
        return `
        height: 16px;
        width: 16px;
        border-radius: 2px;
        font-size: 6px;
        line-height: 16px;
        `
      case 20:
        return `
        height: 20px;
        width: 20px;
        border-radius: 3px;
        font-size: 8px;
        line-height: 20px;
        `
      case 24:
        return `
        height: 24px;
        width: 24px;
        font-size: 10px;
        line-height: 24px;
        `
      case 28:
        return `
        height: 28px;
        width: 28px;
        font-size: 12px;
        line-height: 28px;
        letter-spacing: 0.08em;
        `
      case 32:
        return `
        height: 32px;
        width: 32px;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.06em;
        `
      case 40:
        return `
        height: 40px;
        width: 40px;
        `
      default: 
      return `
        width: 32px;
        height: 32px;
        line-height: 32px;
      ` 
    }
  }} 
  background-color: var(--ui-03);
  color: var(--text-04);
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: uppercase;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAvatar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
