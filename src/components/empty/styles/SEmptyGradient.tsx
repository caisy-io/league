import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISEmpty {
  type: "grid" | "blueprint";
}

const CSSBlueprint = css`
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 7.42%, #ffffff 38.02%);
`;

const CSSGrid = css`
  background-image: linear-gradient(180deg, rgba(248, 250, 251, 0) 5.5%, #f7f9fa 29.9%);
`;

const Bronze = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${(props) => (props.type === "schema" ? CSSBlueprint : CSSGrid)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SEmptyGradient = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
