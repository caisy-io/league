import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighLight } from "../../../constants/styles/fonts";

interface IPreviewText {
  size: 16 | 20 | 24 | 28 | 32 | 40 | 48;
}

const Bronze = css<IPreviewText>`
  ${CSSProgressiveHighLight};
  background-color: var(--ui-03);
  border-radius: 4px;
  color: var(--text-04);
  font-size: 14px;
  font-size: ${(props) => (props.size == 16 ? 6 : '')}px;
  font-size: ${(props) => (props.size == 20 ? 7 : '')}px;
  font-size: ${(props) => (props.size == 24 ? 8 : '')}px;
  font-size: ${(props) => (props.size == 28 || props.size == 32 ? 9 : '')}px;
  font-size: ${(props) => (props.size == 36 || props.size == 40 || props.size == 48 ? 10 : '')}px;
  height: ${(props) => props.size || 32}px;
  line-height: ${(props) => props.size || 32}px;
  letter-spacing: 0.06em;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: ${(props) => props.size || 32}px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPreviewText = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
