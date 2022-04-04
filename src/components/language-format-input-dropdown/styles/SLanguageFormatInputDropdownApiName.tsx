import styled, { css } from "styled-components";
import {
  CSSProgressiveCaption01Semibold,
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles";
import { SSolidLabel } from "../../solid-label/styles/SSolidLabel";

const Bronze = css`
  margin-left: auto;

  ${SSolidLabel} {
    ${CSSProgressiveCaption01Semibold};
    font-family: var(--font-families-inter);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdownApiName = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
