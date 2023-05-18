import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 100%;
  height: calc(100% - 40px);
  > img,
  div {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetImage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
