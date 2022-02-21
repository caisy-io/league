import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const CSSWithLabel = css`
  width: fit-content;
`;

const Bronze = css`
  position: relative;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  ${(props) => props.withLabel && CSSWithLabel}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSimpleInputRequiredIndicatorContainer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
