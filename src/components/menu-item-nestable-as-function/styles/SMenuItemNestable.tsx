import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IMenuItemNestableAsFunction } from "../MenuItemNestableAsFunction";
import { CSSMenuItemActive } from "./CSSMenuItemActive";

const Bronze = css<IMenuItemNestableAsFunction>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-transform: capitalize;
  padding: 4px 8px;
  border-radius: 6px;

  font-size: 14px;
  color: var(--neutral-700);
  line-height: 1.71;
  text-align: left;
  margin-bottom: 1px;

  transition: background-color ease 0.3s, color ease 0.3s;
  ${(props: any) => (props.active ? CSSMenuItemActive : "")}
  &:hover {
    ${CSSMenuItemActive}
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMenuItemNestable = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
` as any; //  any here because styled-components type of as is wrong
