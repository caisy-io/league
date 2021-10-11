import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-size: 64px;
  background-color: var(--primary-500-opacity-16);
  padding: 28px;
  border-radius: 50%;
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  margin-bottom: 16px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SStatusEmote = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
