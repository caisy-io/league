import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTbody {}

const Bronze = css<ISTbody>`
  overflow-y: hidden;
  height: 100%;
  position: relative;

  & > .league-table {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--text-priority-4);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      padding: 20% 0;
    }
  }
`;

const Silver = css<ISTbody>``;

const Gold = css<ISTbody>``;

const Platinum = css<ISTbody>``;

const Diamond = css<ISTbody>``;

export const STbody = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
