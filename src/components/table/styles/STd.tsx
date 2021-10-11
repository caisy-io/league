import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTd {}

const Bronze = css<ISTd>`
  padding: 8px 0;
  vertical-align: middle;
  font-size: 12px;
  display: flex;
  flex: 1;

  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    max-width: calc((100vw - 360px) / 6 - 20px);
  }
`;

const Silver = css<ISTd>``;

const Gold = css<ISTd>``;

const Platinum = css<ISTd>``;

const Diamond = css<ISTd>``;

export const STd = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
