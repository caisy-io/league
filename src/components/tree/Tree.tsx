import { FC, Fragment } from "react";
import { STree } from "./styles/STree";
import { STreeItem } from "./styles/STreeItem";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { STreeDroppable } from "./styles/STreeDroppable";
import { STreeDraggable } from "./styles/STreeDraggable";

export type ITreeItemId = string | number;

export interface ITreeItem {
  id: ITreeItemId;
  children: ITreeItemId[];
  hasChildren?: boolean;
  isExpanded?: boolean;
  isChildrenLoading?: boolean;
  data?: any;
}

export interface ITree {
  tree: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> };
}

export const Tree: FC<ITree> = ({ tree }) => {
  const renderItemChildren = (item: ITreeItem) => {
    if (!item.hasChildren) return null;

    return (
      <>
        {item.children.map((nestedItemId, nestedItemIndex) => {
          const nestedItem = tree.items[nestedItemId];

          return (
            <>
              {!nestedItem.hasChildren ? (
                <Draggable key={nestedItemId} draggableId={nestedItem.id} index={nestedItemIndex}>
                  {(provided, snapshot) => (
                    <STreeDraggable ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <STreeItem>{nestedItem.data.title}</STreeItem>
                      <>{renderItemChildren(nestedItem)}</>
                    </STreeDraggable>
                  )}
                </Draggable>
              ) : (
                <Droppable key={nestedItem.id} droppableId={nestedItem.id}>
                  {(provided, snapshot) => (
                    <STreeDroppable {...provided.droppableProps} ref={provided.innerRef}>
                      <STreeItem>{nestedItem.data.title}</STreeItem>
                      <>{renderItemChildren(nestedItem)}</>
                      {provided.placeholder}
                    </STreeDroppable>
                  )}
                </Droppable>
              )}
            </>
          );
        })}
      </>
    );
  };

  const root = tree.items[tree.rootId];

  return (
    <STree>
      <>{renderItemChildren(root)}</>
    </STree>
  );
};
