import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const CSSHover = css`
  color: var(--hover-text-04);
  cursor: pointer;

  div:last-of-type {
    background-color: var(--hover-text-04);
  }
`;

const CSSActivated = css`
  color: var(--text-01);

  div:last-of-type {
    background-color: var(--text-01);
  }
`;

const CSSError = css`
  color: var(--text-06);

  div:last-of-type {
    background-color: var(--ui-supportive-01);
  }
`;

const Bronze = css`
  ${CSSProgressiveBody03Semibold};
  position: relative;
  color: var(--text-04);
  max-width: min-content;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  margin-left: 1.5rem;
  height: 48px;
  box-sizing: border-box;
  cursor: pointer;

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

export const SLineTab = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
