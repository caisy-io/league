import styled, { css, CSSProp } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import Poppable from "../../poppable";

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

interface ISPopover {
  trianglecolor: string;
  triangleExtraCSS?: CSSProp;
}

const Bronze = css<ISPopover>`
  .poppable-triangle {
    --triangle-color: ${(props) => props.trianglecolor};
    ${(props) => props.triangleExtraCSS && props.triangleExtraCSS}
  }

  ${CSSIn}
  ${CSSOut}
  transform-origin: 0% 9px;
  ${({ state, animate }) => animate && (state === "in" ? CSSAnimationIn : CSSAnimationOut)};
`;

const Silver = css<ISPopover>``;

const Gold = css<ISPopover>``;

const Platinum = css<ISPopover>``;

const Diamond = css<ISPopover>``;

export const SPopover = styled(Poppable)<ISPopover>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
