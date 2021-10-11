import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { SDropdown } from "../../dropdown/styles/SDropdown";
import { SSelectSearchList } from "./SSelectSearchList";

const Bronze = css`
  position: relative;
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  height: min-content;
  align-items: center;
  h2 {
    height: 30px;
  }

  button {
    margin-right: auto;
  }
  ${SSelectSearchList},${SDropdown} {
    width: 100%;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSelectSearch = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
