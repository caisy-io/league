import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListWrapper {}

const Bronze = css<ISListWrapper>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: auto;
`;

const Silver = css<ISListWrapper>``;

const Gold = css<ISListWrapper>``;

const Platinum = css<ISListWrapper>``;

const Diamond = css<ISListWrapper>``;

export const SListWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
