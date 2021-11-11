import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISOrganziationSelectMenuEnviroment {}

const Bronze = css`
  height: 16px;
  width: calc(100% + 10px);
  margin: 0 -5px -5px -5px;
  background-color: var(--ui-03);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--text-04);
  font-size: 8px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectMenuEnviroment = styled.div<ISOrganziationSelectMenuEnviroment>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
