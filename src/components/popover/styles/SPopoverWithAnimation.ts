import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const TRANSFORM_ORIGINS = {
  top: "bottom center",
  bottom: "top center",
  right: "left center",
  left: "right center",
  topRight: "bottom left",
  topLeft: "bottom right",
  bottomRight: "top left",
  bottomLeft: "top right",
  leftTop: "bottom right",
  leftBottom: "top right",
  rightTop: "bottom left",
  rightBottom: "top left",
  bottomAlignedRight: "top left",
};

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
  animation: sizeIn 230ms cubic-bezier(0.37, 0, 0.63, 1) forwards,
    opacityIn 150ms cubic-bezier(0.45, 0, 0.55, 1) forwards;
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
  animation: sizeOut 150ms cubic-bezier(0.37, 0, 0.63, 1) forwards,
    opacityOut 150ms cubic-bezier(0.45, 0, 0.55, 1) forwards;
`;

interface ISPopoverWithAnimation {
  state: "in" | "out";
}

const Bronze = css<ISPopoverWithAnimation>`
  ${CSSIn};
  ${CSSOut};
  transform-origin: ${({ placement }) => TRANSFORM_ORIGINS[placement]};
  ${({ state }) => (state === "in" ? CSSAnimationIn : CSSAnimationOut)};
`;

const Silver = css<ISPopoverWithAnimation>``;

const Gold = css<ISPopoverWithAnimation>``;

const Platinum = css<ISPopoverWithAnimation>``;

const Diamond = css<ISPopoverWithAnimation>``;

export const SPopoverWithAnimation = styled.div<ISPopoverWithAnimation>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
