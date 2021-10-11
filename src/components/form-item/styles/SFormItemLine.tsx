import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: block;
  position: absolute;
  left: 2px;
  top: 3px;
  width: 2px;
  height: calc(100% - 3px);
  border-radius: 4px;
  transition: background-color ease 0.3s;
  background-color: var(--form-item-line-color);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFormItemLine = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
