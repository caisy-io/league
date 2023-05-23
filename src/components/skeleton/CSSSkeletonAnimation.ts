import { css } from "styled-components";

export const CSSSkeletonAnimation = css`
  @keyframes skeleton-pulse {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(202, 31%, 93%);
    }
  }

  :before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.6;
    animation: skeleton-pulse 1s linear infinite alternate;
  }
`;