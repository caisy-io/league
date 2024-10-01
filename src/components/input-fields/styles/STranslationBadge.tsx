import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveCaption02Semibold } from "../../../constants/styles";

const Bronze = css<{ hasAiTranslationApp?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;

  background-color: var(--ui-03);
  color: var(--text-04);
  ${CSSProgressiveCaption02Semibold}

  padding: 5px 6px 6px 6px;
  border-radius: 0 7px;

  ${({ hasAiTranslationApp }) =>
    hasAiTranslationApp &&
    css`
      border-bottom-left-radius: 0px;
    `};

  display: flex;
  align-items: center;
  gap: 4px;

  z-index: 2;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STranslationBadge = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
