import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ILineTabProps } from "../LineTab";

const CSSHover = css`
  color: var(--hover-text-04);
  border-bottom: 1px solid var(--hover-text-04);
  cursor: pointer;
`;

const CSSActivated = css`
  color: var(--text-01);
  border-bottom: 1px solid var(--text-01);
`;

const Bronze = css<ILineTabProps>`
  ${CSSProgressiveBody03Semibold};
  color: var(--text-04);
  max-width: min-content;
  white-space: nowrap;
  padding-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  margin-left: 1.5rem;
  ${(props) => (props.hover ? CSSHover : "")};
  ${(props) => (props.activated ? CSSActivated : "")};
  :hover {
    ${CSSHover}
  }
  :active {
    ${CSSActivated}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLineTab = styled.div<ILineTabProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
