import styled from "styled-components"

interface ISIconBase {
  solid?: boolean;
}

export const SIconBase = styled.svg<ISIconBase>`
  path {
    stroke: var(--icon-01);
    ${({ solid }) => solid && "fill: var(--icon-01);"}
  }

  circle {
    stroke: var(--icon-01);
  }

  path.overwrite {
    stroke: var(--icon-05);
    fill: var(--icon-05);
  }

  path.stroke-transparent {
    stroke: transparent
  }
`