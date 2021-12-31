import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmpty {
  type: "grid" | "schema";
}

const Bronze = css<ISEmpty>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.type === "schema" ? "column" : "row")};
  gap: ${(props) => (props.type === "schema" ? "8px" : "16px")};
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;

  background-color: ${(props) => (props.type === "schema" ? "#FDFDFD" : "var(--ui-03)")};

  padding: 20px;
`;

const Silver = css<ISEmpty>``;

const Gold = css<ISEmpty>``;

const Platinum = css<ISEmpty>``;

const Diamond = css<ISEmpty>``;

export const SEmpty = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
