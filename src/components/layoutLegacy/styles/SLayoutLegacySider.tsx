import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: calc(100vh - 280px);
  overflow: auto;
  max-width: min(10vw + 300px, 450px);
  min-width: min(7vw + 200px, 350px);
  padding: 40px;
  background-color: var(--white-1);
  border-radius: 6px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutLegacySider = styled.aside`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
