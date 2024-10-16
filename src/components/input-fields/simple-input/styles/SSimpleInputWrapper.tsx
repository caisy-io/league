import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const CSSActive = css`
  border-color: var(--active-ui-03-2);
  & input::placeholder {
    color: var(--text-01);
  }
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
  & input::placeholder {
    color: var(--text-01);
  }
`;

const CSSSuccess = css`
  & input::placeholder {
    color: var(--text-01);
  }
`;

const CSSLocked = css`
  background-color: var(--ui-supportive-10);
  border: 1px solid var(--ui-supportive-10);
  & input::placeholder {
    color: var(--text-04);
  }
`;

const Bronze = css`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 12px 12px;
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-radius: 8px;
  display: flex;
  gap: 2px;
  flex-direction: column;
  justify-content: flex-start;
  transition: border 200ms;

  ${(props) => props.active && CSSActive};
  ${(props) => props.state && props.state === "error" && CSSError}
  ${(props) => props.state && props.state === "success" && CSSSuccess}
  ${(props) => props.state && props.state === "locked" && CSSLocked}
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
