import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSIn = css`
  @keyframes opacityIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CSSAnimationIn = css`
  animation: opacityIn 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const CSSOut = css`
  @keyframes opacityOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const CSSAnimationOut = css`
  animation: opacityOut 230ms cubic-bezier(0.37, 0, 0.63, 1) forwards;
`;

const Bronze = css`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1080;

  ${CSSOut};
  ${CSSIn};
  ${({ state }) => (state === "in" ? CSSAnimationIn : CSSAnimationOut)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SModalBackground = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
