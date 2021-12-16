import styled from "styled-components"

interface ISIconBase {
  solid?: boolean;
}

export const SIconBase = styled.svg<ISIconBase>`
  ${({ solid }) => solid && "fill: var(--icon-01)"};
  path {
    stroke: var(--icon-01);
  }
  rect,
  ellipse,
  circle {
    stroke: var(--icon-01);
  }

  .overwrite {
    stroke: var(--icon-05);
    fill: var(--icon-05);
  }

  .transparent-stroke {
    stroke: transparent
  }
  .white-stroke {
    ${({ solid }) => solid && "stroke: var(--icon-05)"};
  }
  .transparent-fill {
    ${({ solid }) => solid && "fill: transparent"};
  }

  .solid-fill {
    fill: var(--icon-01);
  }

  path.white-stroke-path {
    ${({ solid }) => solid && "stroke: var(--icon-05)"};
  }
  
  circle.solid-fill-toogle {
    fill: ${({ solid }) => solid ? "var(--icon-01)" : "transparent"};
  }
`