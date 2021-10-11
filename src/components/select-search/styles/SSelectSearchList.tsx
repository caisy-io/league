import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDropdownSearchList {
  dropdownPosition: "left" | "right" | "center";
}

const Bronze = css<ISDropdownSearchList>`
  position: absolute;
  top: 100%;
  ${(props) => props.dropdownPosition === "right" && "right: 0"};
  ${(props) => props.dropdownPosition === "left" && "left: 0"};
  ${(props) => props.dropdownPosition === "center" && "left: 50%; transform: translateX(-50%)"};
  width: fit-content;
  min-width: 240px;
  margin-top: 8px;

  z-index: 20;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSelectSearchList = styled.div<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
