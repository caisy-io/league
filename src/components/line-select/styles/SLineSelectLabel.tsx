import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const CSSError = css`
  opacity: 1;
  color: var(--text-06);
`;

const Bronze = css`
  ${CSSProgressiveCaption01Semibold}
  color: var(--text-04);
  ${(props) => props.state === "error" && CSSError}
  position: relative;
  width: fit-content;
`;

const Silver = css`
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLineSelectLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
