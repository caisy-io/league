import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css<{ alignRight?: boolean }>`
  grid-row: 1;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  line-height: 1.2;
  line-height: 20px;
  transition: color ease 0.5s;
  color: var(--form-item-info-color);
  ${(props: { alignRight?: boolean }) => (props.alignRight ? "grid-column: 2" : "")};
  ${(props: { alignRight?: boolean }) => (props.alignRight ? "justify-self: flex-end" : "")};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFormItemText = styled.div<{ alignRight?: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
