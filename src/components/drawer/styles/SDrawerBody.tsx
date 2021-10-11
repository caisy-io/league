import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDrawerBody {
  disablePadding?: true;
}

const Bronze = css<ISDrawerBody>`
  padding: 0 32px 32px 32px;
  ${(props) => props.disablePadding !== undefined && "padding: 0;"}
  aside {
    max-height: none;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDrawerBody = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
