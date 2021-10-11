import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 64px;
  height: 64px;
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  border: solid 1px var(--text-priority-neutral-5);
  > div:not(:last-child) {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
  }
  background: var(--neutral-800);
  img {
    background: var(--neutral-800);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDocumentItemImage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
