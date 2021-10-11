import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISPopconfirm {}

const Bronze = css<ISPopconfirm>`
  background-color: var(--white-1);
  padding: 16px;
  border-radius: 6px;
  width: max-content;
  z-index: 120;
  box-shadow: 0 10px 30px 0 rgba(89, 106, 122, 0.2);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPopconfirm = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
