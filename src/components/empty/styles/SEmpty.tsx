import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IEmptyType } from "../Empty";

interface ISEmpty {
  type: IEmptyType;
}

const CSSBlueprint = css`
  flex-direction: column;
  gap: 8px;
  background-color: #fdfdfd;
`;

const CSSGrid = css`
  flex-direction: column;
  gap: 16px;
  background-color: var(--ui-03);
`;

const CSSTable = css`
  padding: 0;
  width: 100%;

  :after {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    position: absolute;
    z-index: 5;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 22.39%, #ffffff 52.49%);
  }
`;

const Bronze = css<ISEmpty>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;

  ${({ type }) => type === "blueprint" && CSSBlueprint};
  ${({ type }) => type === "grid" && CSSGrid};
  ${({ type }) => type === "tableSkeleton" && CSSTable};
`;

const Silver = css<ISEmpty>``;

const Gold = css<ISEmpty>``;

const Platinum = css<ISEmpty>``;

const Diamond = css<ISEmpty>``;

export const SEmpty = styled.div<{ styleOverwrite?: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
