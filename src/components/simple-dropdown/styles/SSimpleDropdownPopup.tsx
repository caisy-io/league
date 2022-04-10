import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
import { SMenuListItem } from "../../menu-list-item";
import { CSSScrollbar } from "../../scrollbar";

const Bronze = css<{ popupWidth: number }>`
  border: 1px solid var(--ui-03);
  border-right: 0;
  background-color: var(--ui-01);
  border-radius: 8px;
  overflow: hidden;
  width: ${({ popupWidth }) => `${popupWidth - 11 - 16}px`};
  box-shadow: var(--box-shadow-action-menus);

  ${SMenuListItem} {
    width: 100%;

    padding: 0.75rem;
    p {
      padding: 0.25rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > div {
    width: 100%;
    overflow: hidden auto;
    max-height: 300px;
    ${CSSScrollbar};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleDropdownPopup = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
