import { css } from "styled-components";

export const CSSSkeletonAnimation = css`
  @keyframes shimmer {
    100% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  :before {
    position: absolute;
    left: ${({ left }) => left || "0"};
    width: ${({ shimmerWidth }) => shimmerWidth || "100%"};
    content: "";
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.70) 50%,
      rgba(255, 255, 255, 0) 65%,
      rgba(255, 255, 255, 0) 100%
    );
    /* background-image: linear-gradient(to right, var(--ui-03) 0%, var(--ui-02) 20%, var(--ui-02) 40%, var(--ui-03) 0%); */
    opacity: 0.8;
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }
`;
