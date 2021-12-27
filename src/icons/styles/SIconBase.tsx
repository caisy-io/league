import styled from "styled-components"

interface ISIconBase {
  solid?: boolean;
}

export const SIconBase = styled.svg<ISIconBase>`
  ${({ solid }) => solid && "fill: currentColor"};
  path {
    stroke: currentColor;
  }
  rect,
  ellipse,
  circle {
    stroke: currentColor;
  }

  .overwrite {
    stroke: var(--icon-05);
    fill: var(--icon-05);
  }

  .transparent-stroke {
    stroke: transparent;
  }

  .white-stroke {
    ${({ solid }) => solid && "stroke: var(--icon-05)"};
  }
  .transparent-fill {
    ${({ solid }) => solid && "fill: transparent"};
  }
  
  .solid-fill {
    fill: currentColor;
  }
  
  path.white-stroke-path {
    ${({ solid }) => solid && "stroke: var(--icon-05)"};
  }
 
  .solid-fill-toogle {
    fill: ${({ solid }) => solid ? "currentColor" : "transparent"};
  }
`
