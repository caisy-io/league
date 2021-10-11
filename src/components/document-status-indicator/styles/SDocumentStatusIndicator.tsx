import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IDocumentStatus } from "../DocumentStatusIndicator";

const CSSDraft = css`
  border: solid 1px var(--states-warning-bg);
  background-color: var(--states-warning-bg);
  color: var(--states-warning);
`;

const CSSChanged = css`
  border: solid 1px var(--states-info-bg);
  background-color: var(--states-info-bg);
  color: var(--states-info);
`;

const CSSPublished = css`
  border: solid 1px var(--states-success-bg);
  background-color: var(--states-success-bg);
  color: var(--states-success);
`;

const Bronze = css<{ status?: IDocumentStatus }>`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  ${(props: { status?: IDocumentStatus }) => {
    if (props.status == "PUBLISHED") return CSSPublished;
    if (props.status == "CHANGED") return CSSChanged;
    return CSSDraft;
  }}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDocumentStatusIndicator = styled.div<{ status?: IDocumentStatus }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
