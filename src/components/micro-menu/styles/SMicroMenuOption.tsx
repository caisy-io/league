import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
import { CSSProgressiveCaption01 } from "../../../constants/styles/fonts";

const Bronze = css<{ renderItem: boolean }>`
  ${CSSProgressiveCaption01};
  color: var(--text-01);
  border-bottom: 1px solid var(--ui-02);
  background-color: var(--ui-01);
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  transition: color 300ms, background-color 300ms;
  ${({ renderItem }) => !renderItem && "padding:4px 8px"};

  :last-of-type {
    border-bottom: 0;
  }

  :hover {
    color: var(--text-02);
    background-color: var(--ui-supportive-06);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMicroMenuOption = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
