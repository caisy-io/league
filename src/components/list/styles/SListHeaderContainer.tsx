import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISListHeaderContainer {}

const Bronze = css<ISListHeaderContainer>`
  padding: 16px 32px;
  width: auto;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  color: var(--text-priority-neutral-1);
  background-color: var(--white-2);
`;

const Silver = css<ISListHeaderContainer>``;

const Gold = css<ISListHeaderContainer>``;

const Platinum = css<ISListHeaderContainer>``;

const Diamond = css<ISListHeaderContainer>``;

export const SListHeaderContainer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
