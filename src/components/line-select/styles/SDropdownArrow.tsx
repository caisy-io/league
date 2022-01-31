import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSOpened = css`
  svg{
    transform: rotate(-180deg);
  }
  svg path {
    stroke: var(--active-ui-03-2);;
    
  }
`;

const Bronze = css`
  svg{
    transition: transform 0.25s ease-in-out;
  }
  ${(props) => props.opened ? CSSOpened : ''};
`;

const Silver = css`
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDropdownArrow = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
