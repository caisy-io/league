import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTreeItem {
  isDragging: boolean;
  selected: boolean;
  isDroppingInsideNode: boolean;
}

const Bronze = css<ISTreeItem>`
  position: relative;
  margin: 4px 0;
  cursor: pointer;
  font-size: 14px;
  width: auto;
  height: max-content;

  padding: 8px;
  min-height: 20px;
  color: var(--text-03);
  background-color: transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: open 500ms;

  opacity: ${(props) => (props.isDragging ? ".5" : "1")};

  :hover {
    color: var(--interactional-primary-01);
    background-color: var(--primary-500-opacity-8);
    ${(props) => props.selected && "color: var(--ui-01)"};
    ${(props) => props.selected && "background-color: var(--interactional-primary-01)"};
  }

  ${(props) => props.selected && "color: var(--ui-01)"};
  ${(props) => props.selected && "background-color: var(--interactional-primary-01)"};
  ${(props) => props.isDroppingInsideNode && "background-color: var(--primary-500-opacity-8)"};

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Silver = css<ISTreeItem>``;

const Gold = css<ISTreeItem>``;

const Platinum = css<ISTreeItem>``;

const Diamond = css<ISTreeItem>``;

export const STreeItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
