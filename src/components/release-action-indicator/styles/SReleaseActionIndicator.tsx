import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IReleaseAction } from "../ReleaseActionIndicator";

const CSSUnPublish = css`
  border: solid 1px var(--states-info-bg);
  background-color: var(--states-info-bg);
  color: var(--states-info);
`;

const CSSPublish = css`
  border: solid 1px var(--states-success-bg);
  background-color: var(--states-success-bg);
  color: var(--states-success);
`;

const Bronze = css<{ action?: IReleaseAction }>`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
  min-width: 100px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${(props: { action?: IReleaseAction }) => (props.action == "PUBLISH" ? CSSPublish : CSSUnPublish)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SReleaseActionIndicator = styled.div<{ action?: IReleaseAction }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
