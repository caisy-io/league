import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDrawerHeader {
  background: string;
  color: string;
}

const Bronze = css<ISDrawerHeader>`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  color: var(--text-priority-neutral-1);
  min-height: 40px;
  max-height: 40px;
  padding-left: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* svg {
    path {
      fill: ${(props) => props.background};
    }
  } */
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDrawerHeader = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
