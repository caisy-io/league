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

const Bronze = css<ISEmpty>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  min-height: calc(100% - 40px);

  ${(props) => (props.type === "blueprint" ? CSSBlueprint : CSSGrid)};

  padding: 20px;
`;

const Silver = css<ISEmpty>``;

const Gold = css<ISEmpty>``;

const Platinum = css<ISEmpty>``;

const Diamond = css<ISEmpty>``;

export const SEmpty = styled.div<{styleOverwrite?: string}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({styleOverwrite}) => styleOverwrite ?? ''};
`;