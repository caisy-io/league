import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSScrollbarStyles } from "../../../constants/styles/scrollbar-styles";

const Bronze = css`
  // border: 1px solid #dedede;
  background-color: var(--ui-01);
  border-radius: 6px;
  font-size: 14px;
  overflow: hidden;
  /* max-height: 300px; */
  overflow: auto;
  ${CSSScrollbarStyles};
  color: var(--form-item-text-color);

  width: 332px;
  box-shadow: var(--box-shadow-strong-pop-elavation);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectInputDropdownSelect = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
