import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISOrganziationSelectMenuEnviroment {
  expanded?: boolean;
}

const Bronze = css`
  height: 16px;
  margin: 8px 0 0 0;
  background-color: var(--ui-03);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-04);
  font-size: 8px;
  border-radius: 4px;
  width: ${(props) => (props?.expanded ? "135px" : "36px")};
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 8px;
    background-color: var(--ui-03);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
  transition: width 0.3s ease-in-out;
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
