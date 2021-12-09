import styled, { css } from "styled-components";
import { CSSProgressiveHeading01 } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSActive = css`
  color: var(--text-04);
`;

const Bronze = css`
  ${CSSProgressiveHeading01};
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  color: var(--text-03);

  ${(props) => props.active && CSSActive};

  svg {
    height: 18px;
    width: 18px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPrimaryModalHeaderLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
