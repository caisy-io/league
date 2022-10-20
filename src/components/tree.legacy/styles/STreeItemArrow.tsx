import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTreeItemArrow {
  open: boolean;
}

const Bronze = css<ISTreeItemArrow>`
  ${(props) => props.open && "transform: rotate(90deg)"};
  transition: transform 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Silver = css<ISTreeItemArrow>``;

const Gold = css<ISTreeItemArrow>``;

const Platinum = css<ISTreeItemArrow>``;

const Diamond = css<ISTreeItemArrow>``;

export const STreeItemArrow = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
