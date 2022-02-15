import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSScrollbarStyles } from "../../../constants/styles/scrollbar-styles";
interface ISSelectDropdown {}

const Bronze = css<ISSelectDropdown>`
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);
  background-color: var(--ui-01);
  border-radius: 6px;
  font-size: 14px;
  overflow: hidden;
  max-height: 240px;
  overflow: auto;
  ${CSSScrollbarStyles};
  color: var(--form-item-text-color);
  transition: box-shadow ease 0.5s, border ease 0.5s;
  &:hover {
    box-shadow: 0 2px 7px 0 rgba(89, 106, 122, 0.14);
  }
`;

const Silver = css<ISSelectDropdown>``;

const Gold = css<ISSelectDropdown>``;

const Platinum = css<ISSelectDropdown>``;

const Diamond = css<ISSelectDropdown>``;

export const SSelectDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
