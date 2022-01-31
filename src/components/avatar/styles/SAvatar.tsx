import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveHighlight } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";

interface ISAvatar {
  size?: 16 | 20 | 24 | 28 | 32 | 40;
}

const Bronze = css<ISAvatar>`
  ${CSSProgressiveHighlight};
  background-color: var(--ui-03);
  border-radius: 4px;
  color: var(--text-04);
  font-size: ${(props) => (props.size ? props.size / 2 - 2 : 14)}px;
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

export const SAvatar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
