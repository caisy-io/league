import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISSelectOption {
  selected?: boolean;
}

const Bronze = css<ISSelectOption>`
  padding: 8px;
  cursor: pointer;

  &:hover {
    color: var(--primary-400);
    background-color: var(--primary-100);
  }

  ${(props) => props.selected && "color: var(--primary-400); background-color: var(--primary-100);"}
`;

const Silver = css<ISSelectOption>``;

const Gold = css<ISSelectOption>``;

const Platinum = css<ISSelectOption>``;

const Diamond = css<ISSelectOption>``;

export const SSelectOption = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
