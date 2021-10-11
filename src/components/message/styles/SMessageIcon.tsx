import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface IMessageIcon {
  backgroundColor: string;
  color: string;
}

const Bronze = css<IMessageIcon>`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMessageIcon = styled.div<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
