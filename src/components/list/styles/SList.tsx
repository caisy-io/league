import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISList {}

const Bronze = css<ISList>`
  background-color: var(--white-1);

  div {
    overflow-x: hidden;
  }

  > div::-webkit-scrollbar {
    width: 8px;
  }

  > div::-webkit-scrollbar-thumb {
    background: var(--text-priority-4);
    border-radius: 6px;
  }

  > div::-webkit-scrollbar-track {
    padding: 20% 0;
  }
`;

const Silver = css<ISList>``;

const Gold = css<ISList>``;

const Platinum = css<ISList>``;

const Diamond = css<ISList>``;

export const SList = styled.ul`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
