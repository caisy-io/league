import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../..";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ITooltip {
  animation: any;
  color: string;
}

const CSSBlack = css`
  background-color: var(--ui-overlay-02);
  color: var(--text-02);
`;

const CSSWhite = css`
  background-color: var(--ui-01);
  color: var(--text-01);
`;

const Bronze = css<ITooltip>`
  ${CSSProgressiveCaption01Semibold}
  display: flex;
  z-index: 120;
  width: max-content;

  border-radius: 4px;
  ${(props) => (props.color === "black" ? CSSBlack : CSSWhite)}
  padding: 8px;

  box-shadow: var(--box-shadow-sticked-top-ui);

  ${(props) => props.animation}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STooltip = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
