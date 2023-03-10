import styled, { css } from "styled-components";

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

export const SUsageAmountItemUsageGraph = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) => (color === "red" ? CSSRed : color === "yellow" ? CSSYellow : CSSBlue)};

  svg {
    position: absolute;
    height: 32px;
    width: 32px;
  }
`;
