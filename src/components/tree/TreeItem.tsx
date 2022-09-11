import React from "react";
import { STreeItem } from "./styles/STreeItem";
// @ts-ignore
import { useDrag, useDrop } from "react-dnd";
import { SDropPositionIndicator } from "./styles/SDropPositionIndicator";

interface ITreeItem {
  parent: string | number;
  index: number;
  onDrop: (index: number, newIndex: number, oldParent: string | number, newParent: string | number) => void;
  style?: React.CSSProperties;
  onSelect: () => void;
  selected: () => boolean;
  isLeaf: boolean | undefined;
  id: string | number;
}

interface IDraggableItem {
  parent: string | number;
  index: number;
  id: string | number;
  isLeaf: boolean | undefined;
}

export const TreeItem: React.FC<ITreeItem> = ({ ...props }) => {
  const [isAbove, setIsAbove] = React.useState(false);
  const [isSame, setIsSame] = React.useState(false);
  const [isDroppingInsideNode, setIsDroppingInsideNode] = React.useState(false);

  const [{ isDragging }, dragLeaf] = useDrag({
    type: "MENU_ITEM",
    item: { parent: props.parent, index: props.index, id: props.id, isLeaf: props.isLeaf },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropOnLeaf] = useDrop({
    accept: "MENU_ITEM",
    hover: (item: IDraggableItem, monitor) => {
      // we check if the dragged item is above the hovered one, if it is, we insert it below
      // else, we insert it above
      setIsAbove(item.index > props.index);
      // check if we are dragging the item over itself
      setIsSame(props.index === item.index);
      setTimeout(() => {
        setIsDroppingInsideNode(monitor.isOver());
      }, 300);
    },
    drop: (item: IDraggableItem) => {
      if (!props.isLeaf && isDroppingInsideNode) {
        props.onDrop(item.index, props.index, item.parent, props.id);
      } else {
        props.onDrop(item.index, props.index, item.parent, props.parent);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    canDrop: (item: IDraggableItem) => props.parent !== item.id,
  });

  const listItemRef = (el: HTMLDivElement) => {
    dropOnLeaf(el);
    dragLeaf(el);
  };

  return (
    <STreeItem
      isDroppingInsideNode={(!props.isLeaf as boolean) && isDroppingInsideNode}
      onClick={props.onSelect}
      selected={props.selected()}
      style={props.style}
      isDragging={isDragging}
      ref={listItemRef}
    >
      {(!isDroppingInsideNode && !props.isLeaf) || !!props.isLeaf ? (
        <SDropPositionIndicator isOver={isOver} isAbove={isAbove} isSame={isSame} />
      ) : null}
      {props.children}
    </STreeItem>
  );
};
