import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISLayoutTopNav {
  height?: string;
}

const Bronze = css<ISLayoutTopNav>`
  background: lightblue;
  height: ${props => props.height ? props.height : '10vh'};
  line-height: ${props => props.height ? props.height : '10vh'};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLayoutTopNav = styled.header`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
