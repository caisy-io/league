import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;

  button {
    font-size: 10px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    & + button {
      margin-left: 8px;
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPopconfirmButtons = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
