import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const CSSLocked = css`
  color: var(--text-04);

  &:disabled {
    color: var(--text-04);
  }
`;

const Bronze = css`
  border: unset;
  outline: unset;
  box-shadow: unset;
  padding: unset;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-01);

  width: ${(props) => (props.width ? `${props.width}px` : "100%")};

  ${(props) => props.locked && CSSLocked}

  &::placeholder {
    color: var(--text-03);
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
