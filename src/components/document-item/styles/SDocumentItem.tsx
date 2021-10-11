import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDocumentItem {
  selected?: boolean;
  hovering?: boolean | undefined;
  selectable?: boolean;
}

const BronzeSelectable = css<ISDocumentItem>`
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--primary-400);
    opacity: 0;
    transition: opacity 0.05s ease;
    z-index: 2;
    border-radius: 8px;
  }

  &:hover {
    &::before {
      opacity: 0.2;
    }
  }

  &:not(:disabled) {
    &::before {
      ${(props) => (props.selected ? "opacity: 0.4;" : "")};
    }
  }
`;

const Bronze = css<ISDocumentItem>`
  position: relative;
  width: 100%;
  box-shadow: 0 10px 5px 0 rgb(89 106 122 / 11%);

  overflow: hidden;
  cursor: pointer;

  ${(props) => (props.selectable ? BronzeSelectable : "")}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDocumentItem = styled.div<ISDocumentItem>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
