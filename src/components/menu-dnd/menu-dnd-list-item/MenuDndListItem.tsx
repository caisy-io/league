import React from "react";
import SMenuDndListItem from "./styles/SMenuDndListItem";
import { SDropPositionIndicator } from "./styles/SDropPositionIndicator";
import { useDrag, useDrop } from "react-dnd";

interface IMenuDndListItem {
  id: number;
  index: number;
  onDrop: (fromIndex: number, toIndex: number) => void;
  children?: React.ReactNode;
}

interface IDraggableItem {
  id: number;
  index: number;
}

const MenuDndListItem: React.FC<IMenuDndListItem> = ({ ...props }) => {
  const [isAbove, setIsAbove] = React.useState(false);
  const [isSame, setIsSame] = React.useState(false);

  const [{ isDragging }, dragListItem] = useDrag({
    type: "MENU_ITEM",
    item: { index: props.index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropOnListItem] = useDrop({
    accept: "MENU_ITEM",
    hover: (item: IDraggableItem) => {
      // we check if the dragged item is above the hovered one, if it is, we insert it below
      // else, we insert it above
      if (item.index > props.index) {
        setIsAbove(true);
      } else {
        setIsAbove(false);
      }
      // check if we are dragging the item over itself
      if (props.index === item.index) {
        setIsSame(true);
      } else {
        setIsSame(false);
      }
    },
    drop: (item: IDraggableItem) => {
      props.onDrop(item.index, props.index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    canDrop: (item: IDraggableItem) => item.index !== props.index,
  });

  const listItemRef = (el: HTMLLIElement) => {
    dropOnListItem(el);
    dragListItem(el);
  };

  return (
    <SMenuDndListItem isDragging={isDragging} ref={listItemRef}>
      <SDropPositionIndicator isOver={isOver} isAbove={isAbove} isSame={isSame} />
      {props.children}
    </SMenuDndListItem>
  );
};

export default MenuDndListItem;
