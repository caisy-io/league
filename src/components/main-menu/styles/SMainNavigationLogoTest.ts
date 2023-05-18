import styled, { css, keyframes } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const LogoTextFadeIn = keyframes`
0%{
 opacity: 0;
}
100%{
  opacity: 1; 
}
`;

const Bronze = css`
  img {
    ${(props: any) => (props.filterColor ? `filter: hue-rotate(var(--value, ${props.filterColor}))` : "")}
  }
  opacity: 0;
  animation: ${LogoTextFadeIn} 0.3s ease-in-out forwards;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMainNavigationLogoText = styled.div<{ filterColor: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
