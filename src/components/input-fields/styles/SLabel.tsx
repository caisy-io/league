import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  color: var(--hover-text-04);
`;

const CSSActive = css`
  color: var(--active-text-04);
`;

interface ISLabel {
  hover: boolean;
  active: boolean;
}

const Bronze = css<ISLabel>`
  ${CSSProgressiveCaption01Semibold}
  color: var(--text-04);
  transition: color 200ms;

  ${(props: ISLabel) => props.hover && CSSHover}
  ${(props: ISLabel) => props.active && CSSActive}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
