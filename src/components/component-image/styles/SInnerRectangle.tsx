import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

export const CSSTypeGrid = css`
  border-radius: 0.25rem;
`;

export const CSSTypeListItem = css`
  border-radius: 0.25rem;
`;

const Bronze = css`
  background-color: var(--ui-01);
  width: 100%;
  height: 100%;
  img {
    border-radius: 0.5rem;
    ${(props) => (props.type == "grid" ? CSSTypeGrid : "")};
    ${(props) => (props.type == "list-item" ? CSSTypeListItem : "")};
  }
  .lazyload-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInnerRectangle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
