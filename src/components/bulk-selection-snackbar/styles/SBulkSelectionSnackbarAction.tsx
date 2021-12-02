import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;

  ${CSSProgressiveCaption01Semibold};
  color: var(--text-04);

  cursor: pointer;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBulkSelectionSnackbarAction = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
