import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSScrollbarStyles } from "../../../constants/styles/scrollbar-styles";

interface ISSelect {
  multiple?: boolean;
}

const Bronze = css<ISSelect>`
  padding: ${(props) => (props.multiple ? "3px" : "12px 8px")};
  border: 1px solid #dedede;
  background-color: var(--white-1);
  transition: box-shadow ease 0.5s, border ease 0.5s;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  color: var(--form-item-text-color);
  min-width: 200px;
  ${CSSScrollbarStyles};

  &:hover {
    box-shadow: 0 2px 7px 0 rgba(89, 106, 122, 0.14);
  }

  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSelect = styled.div<ISSelect>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
