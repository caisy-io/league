import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";
import { ISidebarCardProps } from "../SidebarCard";

const Bronze = css<ISidebarCardProps>``;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarcardTextWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
