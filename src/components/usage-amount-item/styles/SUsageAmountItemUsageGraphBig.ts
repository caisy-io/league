import styled, { css } from "styled-components";
import { CSSProgressiveBody02Semibold, ProgressiveBody03 } from "../../../constants/styles/fonts";

const CSSBlue = css`
  svg {
    stroke: var(--ui-supportive-06);
  }
`;

const CSSYellow = css`
  svg {
    stroke: var(--tag-03);
  }
`;

const CSSRed = css`
  svg {
    stroke: var(--ui-supportive-01);
  }
`;

export const SUsageAmountItemUsageGraphBig = styled.div`
  position: relative;
  height: 68px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) => (color === "red" ? CSSRed : color === "yellow" ? CSSYellow : CSSBlue)};

  svg {
    transform: rotateY(180deg);
    position: absolute;
    height: 68px;
    width: 68px;
  }
  label {
    position: absolute;
    height: 68px;
    width: 68px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    ${CSSProgressiveBody02Semibold};
    color: var(--text-01);
  }
`;
