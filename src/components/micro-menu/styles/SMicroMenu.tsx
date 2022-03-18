import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
import { SScrollbar } from "../../scrollbar/styles/SScrollbar";

const Bronze = css<{ menuHeight?: string }>`
  background-color: var(--ui-01);
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid var(--ui-03);
  box-shadow: var(--box-shadow-strong-pop-elavation);
  max-width: fit-content;
  border-right: 0;

  ${SScrollbar} {
    height: ${({ menuHeight }) => menuHeight && menuHeight};
    overflow: hidden auto;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMicroMenu = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
