import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles";

const CSSLocked = css`
  color: var(--text-04);

  &:disabled {
    background: none;
    color: var(--text-04);
  }
`;

const Bronze = css`
  border: unset;
  outline: unset;
  box-shadow: unset;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-01);
  overflow: hidden;

  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "20px")};
  resize: none;

  ${(props) => props.locked && CSSLocked}

  &::placeholder {
    color: var(--text-03);
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInputMultiline = styled.textarea`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
