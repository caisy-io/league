import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND, CSSProgressiveBody03Medium } from "../../../constants/styles";
import { SSimpleDropdownPlaceholder } from "./SSimpleDropdownPlaceholder";
import { SSimpleDropdownTitleAndIcon } from "./SSimpleDropdownTitleAndIcon";

const CSSActive = css`
  ${SSimpleDropdownTitleAndIcon}, ${SSimpleDropdownPlaceholder} {
    color: var(--active-text-01);
  }
`;

const Bronze = css<{ active: boolean }>`
  padding: 12px 11px 12px 16px;
  cursor: pointer;
  color: var(--text-01);
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  gap: 4px;

  :hover {
    ${SSimpleDropdownTitleAndIcon}, ${SSimpleDropdownPlaceholder} {
      color: var(--hover-text-01-1);
    }
  }

  :active {
    ${CSSActive};
  }

  ${CSSProgressiveBody03Medium};

  ${({ active }) => active && CSSActive}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
