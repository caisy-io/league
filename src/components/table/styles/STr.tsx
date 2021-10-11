import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTr {}

const Bronze = css<ISTr>`
  transition: background-color 200ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

const Silver = css<ISTr>``;

const Gold = css<ISTr>``;

const Platinum = css<ISTr>``;

const Diamond = css<ISTr>``;

export const STr = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
