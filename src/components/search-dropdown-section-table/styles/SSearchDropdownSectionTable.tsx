import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";

const Bronze = css`
  display: table;
  width: 100%;
  border-bottom: 3px solid var(--ui-03);
  border-collapse: collapse;
  table-layout: fixed;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchDropdownSectionTable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
