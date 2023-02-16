import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSIn = css`
  @keyframes sizeIn {
    from {
      transform: scale(0.96);
    }
    to {
      transform: scale(1);
    }
  }

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
  animation: sizeIn 230ms cubic-bezier(0.4, 0, 0.2, 1) forwards, opacityIn 230ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const CSSOut = css`
  @keyframes sizeOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.96);
    }
  }

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
  animation: sizeOut 350ms cubic-bezier(0.37, 0, 0.63, 1) forwards,
    opacityOut 230ms cubic-bezier(0.37, 0, 0.63, 1) forwards;
`;

const Bronze = css`
  background-color: var(--ui-01);
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 0 10px 35px 0 rgba(89, 106, 122, 0.12);
  z-index: 1100;

  ${CSSIn};
  ${CSSOut};

  ${({ state }) => (state === "in" ? CSSAnimationIn : CSSAnimationOut)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SModal = styled.div<{ styleOverwrite?: any }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
