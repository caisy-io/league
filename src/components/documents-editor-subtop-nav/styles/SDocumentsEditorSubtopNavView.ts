import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  margin-left: auto;
  padding: 14px 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  border-left: 1px solid var(--ui-03);

  color: var(--text-01);

  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDocumentsEditorSubtopNavView = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
