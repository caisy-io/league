import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighLight } from "../../../constants/styles/fonts";

interface IPreviewIcon {
  size: 16 | 20 | 24 | 28 | 32 | 40 | 48;
}

const Bronze = css<IPreviewIcon>`
  ${CSSProgressiveHighLight};
  background-color: var(--ui-03);
  border-radius: 4px;
  color: var(--text-04);
  font-size: ${(props) => (props.size == 16 ? 6 : '')}px;
  font-size: ${(props) => (props.size == 20 ? 7 : '')}px;
  font-size: ${(props) => (props.size == 24 ? 8 : '')}px;
  font-size: ${(props) => (props.size == 28 || props.size == 32 ? 9 : '')}px;
  font-size: ${(props) => (props.size == 36 || props.size == 40 || props.size == 48 ? 10 : '')}px;
  height: ${(props) => props.size || 32}px;
  width: ${(props) => props.size || 32}px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: ${(props) => (props.size == 16 ? 6 : '')}px;
    width: ${(props) => (props.size == 20 || props.size == 24 || props.size == 28 || props.size == 32 ? 12 : '')}px;
    width: ${(props) => (props.size == 36 || props.size == 40 || props.size == 48 ? 14 : '')}px;
    height: ${(props) => (props.size == 16 ? 6 : '')}px;
    height: ${(props) => (props.size == 20 || props.size == 24 || props.size == 28 || props.size == 32 ? 12 : '')}px;
    height: ${(props) => (props.size == 36 || props.size == 40 || props.size == 48 ? 14 : '')}px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPreviewIcon = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
