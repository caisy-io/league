import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTh {}

const Bronze = css<ISTh>`
  text-align: left;
  padding: 16px 0;
  font-size: 14px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 46px;
  line-height: 1.8;
  user-select: none;
`;

const Silver = css<ISTh>``;

const Gold = css<ISTh>``;

const Platinum = css<ISTh>``;

const Diamond = css<ISTh>``;

export const STh = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
