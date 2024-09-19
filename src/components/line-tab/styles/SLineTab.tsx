import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold, CSSProgressiveHighlightSmallBadges } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const CSSHover = css`
  color: var(--hover-text-04);
  cursor: pointer;

  div:last-of-type {
    background-color: var(--hover-text-04);
  }
`;

const CSSActivated = css<{ activated?: boolean; hover?: boolean; hasError?: boolean }>`
  color: var(--text-01);

  div:last-of-type {
    background-color: ${({ hasError }) => (hasError ? "var(--ui-supportive-01)" : "var(--text-01)")};
  }
`;

const CSSError = css`
  color: var(--text-06);
`;

const Bronze = css<{ activated?: boolean; hover?: boolean; hasError?: boolean }>`
  ${CSSProgressiveBody03Semibold};
  position: relative;
  color: var(--text-04);
  max-width: min-content;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  height: 48px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease-in-out;

  > span {
    width: 16px;
    height: 16px;
    background-color: var(--ui-supportive-01);
    border-radius: 24px;
    text-align: center;
    ${CSSProgressiveHighlightSmallBadges};
    color: var(--text-02);
  }

  div:last-of-type {
    background-color: transparent;
  }

  ${({ hover }) => (hover ? CSSHover : "")};
  ${({ activated }) => (activated ? CSSActivated : "")};
  ${({ hasError }) => hasError && CSSError};

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

export const SLineTab = styled.div<{ activated?: boolean; hover?: boolean; hasError?: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
