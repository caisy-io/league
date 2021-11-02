import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const CSSHovering = css`
  color: var(--hover-text-04);
`;

const CSSActive = css`
  color: var(--active-text-04);
`;

const CSSError = css`
  color: var(--ui-supportive-01);
`;

const Bronze = css`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: var(--text-04);
  transition: color 200ms;

  ${(props) => props.hovering && CSSHovering}
  ${(props) => props.active && CSSActive}
  ${(props) => props.state && props.state === "error" && CSSError}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInputLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
