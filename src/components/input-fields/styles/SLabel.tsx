import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSLocked = css`
  color: var(--text-04);
`;

const CSSActive = css`
  color: var(--active-text-04);
`;

const CSSError = css`
  color: var(--text-06);
`;

const Bronze = css`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-04);
  ${(props) => (props.hover || props.active) && CSSActive}
  ${(props) => props.locked && CSSLocked}
  ${(props) => props.error && CSSError}
  transition: color 150ms;
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
