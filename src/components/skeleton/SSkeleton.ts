import styled from "styled-components";
import { CSSSkeletonAnimation } from "./CSSSkeletonAnimation";

export const SSkeleton = styled.div`
  width: ${({ width }) => width || "16px"};
  height: ${({ height }) => height || "16px"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background-color: var(--ui-03);
  position: relative;
  overflow: hidden;
  ${({ disableAnimation }) => (disableAnimation ? "" : CSSSkeletonAnimation)};
`;
