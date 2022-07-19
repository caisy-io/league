import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSScrollbarStyles } from "../../../constants/styles/scrollbar-styles";
interface ISSelectDropdown {}

const Bronze = css<ISSelectDropdown>`
  font-size: 14px;
  max-height: 300px;
  overflow: auto;
  ${CSSScrollbarStyles};
`;

const Silver = css<ISSelectDropdown>``;

const Gold = css<ISSelectDropdown>``;

const Platinum = css<ISSelectDropdown>``;

const Diamond = css<ISSelectDropdown>``;

export const SSelectDropdownList = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
