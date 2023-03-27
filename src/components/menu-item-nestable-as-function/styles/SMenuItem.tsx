import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSMenuItemActive } from "./CSSMenuItemActive";

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  padding: 4px 8px;
  border-radius: 6px;

  font-size: 14px;
  color: var(--text-03);
  line-height: 1.71;
  text-align: left;

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

export const SMenuItem = styled.li`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
