import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles/fonts";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const CSSDraft = css`
  background-color: var(--ui-supportive-04);
  color: var(--text-08);
`;

const CSSPublished = css`
  background-color: var(--ui-supportive-05);
  color: var(--text-07);
`;

const CSSChanged = css`
  background-color: var(--ui-02);
  color: var(--text-09);
`;

const Bronze = css`
  margin-left: auto;
  ${CSSProgressiveCaption01Semibold};
  letter-spacing: normal;
  text-transform: capitalize;
  padding: 4px 8px;
  background-color: var(--ui-03);
  color: var(--text-03);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.status === "DRAFT" && CSSDraft}
  ${(props) => props.status === "PUBLISHED" && CSSPublished}
  ${(props) => props.status === "CHANGED" && CSSChanged}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlockEditorSidebarStatusBadge = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
