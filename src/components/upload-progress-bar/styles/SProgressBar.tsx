import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface IProgressBar {
  progress: number;
}

const Bronze = css<IProgressBar>`
  position: relative;

  width: 100%;
  height: 4px;
  margin-bottom: 24px;

  background-color: var(--ui-03);
  border-radius: 4px;

  &::after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    background-color: var(--ui-supportive-06);
    border-radius: 4px 0 0 4px;

    width: ${(props) => (props.progress ? `${props.progress}%` : "0")};
    height: inherit;

    transition: width 0.3s ease-in-out;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProgressBar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
