import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  height: 40px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  border: solid 1px var(--form-item-outline-color);
  background-color: var(--ui-01);
  transition: box-shadow ease 0.5s, border ease 0.5s;
  &:hover {
    box-shadow: 0 2px 7px 0 rgba(89, 106, 122, 0.14);
  }
  > input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    height: 24px;
    font-size: 14px;
    line-height: 1.71;
    text-align: left;
    color: var(--text-01);

    &::placeholder {
      color: var(--text-03);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--ui-01);
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInput = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
