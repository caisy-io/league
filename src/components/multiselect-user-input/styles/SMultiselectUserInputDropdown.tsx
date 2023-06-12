import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSScrollbarStyles } from "../../../constants/styles";

const Bronze = css`
  max-height: 384px;
  width: 340px;
  overflow-y: auto;
  border-radius: 8px;
  background-color: var(--ui-01);
  box-shadow: var(--box-shadow-strong-pop-elavation);
  margin-left: -20px;
  margin-top: 12px;

  ${CSSScrollbarStyles}
  &::-webkit-scrollbar {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectUserInputDropdown = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
