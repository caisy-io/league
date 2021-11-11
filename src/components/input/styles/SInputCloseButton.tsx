import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  min-width: 24px;
  max-width: 24px;
  min-height: 24px;
  max-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  background-color: var(--primary-500-opacity-8);

  svg {
    height: 20px;
    width: 20px;

    path {
      stroke: var(--interactional-primary-01);
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInputCloseButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
