import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighLight } from "../../../constants/styles/fonts";

interface IPreviewImage {
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
}

const Bronze = css<IPreviewImage>`
  ${CSSProgressiveHighLight};
  background-color: var(--ui-03);
  border-radius: 4px;
  height: ${(props) => props.size || 32}px;
  overflow: hidden;
  position: relative;
  width: ${(props) => props.size || 32}px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPreviewImage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
