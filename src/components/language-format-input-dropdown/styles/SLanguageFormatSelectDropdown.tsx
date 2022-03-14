import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
interface ISSelectDropdown {}

const Bronze = css<ISSelectDropdown>`
  background-color: var(--ui-01);
  border-radius: 8px;
  font-size: 14px;
  max-height: 240px;
  overflow: hidden;
  color: var(--form-item-text-color);
  transition: box-shadow ease 0.5s, border ease 0.5s;
  box-shadow: var(--box-shadow-strong-pop-elavation);
`;

const Silver = css<ISSelectDropdown>``;

const Gold = css<ISSelectDropdown>``;

const Platinum = css<ISSelectDropdown>``;

const Diamond = css<ISSelectDropdown>``;

export const SLanguageFormatSelectDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
