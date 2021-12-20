import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const CSSActive = css`
  border-color: var(--active-ui-03-2);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const Bronze = css`
  position: relative;
  overflow: hidden;
  width: 320px;
  padding: 10px 12px;
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: border 200ms;
  gap: 2px;

  ${(props) => props.active && CSSActive};
  ${(props) => props.state && props.state === "error" && CSSError}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInputWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
