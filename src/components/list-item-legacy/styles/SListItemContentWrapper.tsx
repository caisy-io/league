import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListItemContentWrapper {}

const Bronze = css<ISListItemContentWrapper>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Silver = css<ISListItemContentWrapper>``;

const Gold = css<ISListItemContentWrapper>``;

const Platinum = css<ISListItemContentWrapper>``;

const Diamond = css<ISListItemContentWrapper>``;

export const SListItemContentWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
