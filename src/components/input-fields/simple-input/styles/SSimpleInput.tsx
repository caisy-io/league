import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
  CSSProgressiveBody03Medium,
} from "../../../../constants/styles";

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
  width: 100%;

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

  &[type="number"] {
    -moz-appearance: textfield;
  }

  /* Change Autocomplete styles in Chrome*/

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: var(--text-01);
    -webkit-background-clip: text;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInput = styled.input`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

const CSSMultiline = css`
  overflow: hidden;
  resize: none;
  ${CSSProgressiveBody03Medium};
  font-family: Inter;
`;

export const SSimpleInputMultiline = styled.textarea`
  ${CSSMultiline}
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
