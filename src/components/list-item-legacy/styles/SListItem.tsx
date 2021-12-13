import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItem {}

const Bronze = css<ISListItem>`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  gap: 16px;
`;

const Silver = css<ISListItem>``;

const Gold = css<ISListItem>``;

const Platinum = css<ISListItem>``;

const Diamond = css<ISListItem>``;

export const SListItem = styled.li`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
