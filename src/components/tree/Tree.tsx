import { FC, Fragment } from "react";
import { STree } from "./styles/STree";
import { STreeItem } from "./styles/STreeItem";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
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

export interface ITreeItemSource {
  parentId: ITreeItemId;
  index: number;
}

export interface ITreeItemDestination {
  parentId: ITreeItemId;
  index: number;
}

export type IOnDragEnd = (input: { source: ITreeItemSource; destination?: ITreeItemDestination }) => void;

export type IOnDragStart = (draggableId: ITreeItemId) => void;

export interface ITree {
  tree: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> };
  isDragEnabled?: (item: ITreeItem) => boolean;
  onDragEnd: IOnDragEnd;
  onDragStart: IOnDragStart;
}

const WrappedTree: FC<ITree> = ({ tree, onDragEnd, onDragStart, isDragEnabled }) => {
  const renderItemChildren = (item: ITreeItem) => {
    if (!item.hasChildren) return null;

    return (
      <>
        {item.children.map((nestedItemId, nestedItemIndex) => {
          const nestedItem = tree.items[nestedItemId];

          return (
            <>
              {!nestedItem.hasChildren ? (
                <Draggable
                  isDragDisabled={!isDragEnabled ? false : !isDragEnabled?.(nestedItem)}
                  key={nestedItemId}
                  draggableId={`${nestedItem.id}`}
                  index={nestedItemIndex}
                >
                  {(provided) => (
                    <STreeDraggable ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <STreeItem>{nestedItem.data.title}</STreeItem>
                      <>{renderItemChildren(nestedItem)}</>
                    </STreeDraggable>
                  )}
                </Draggable>
              ) : (
                <Droppable key={nestedItem.id} droppableId={`${nestedItem.id}`}>
                  {(provided) => (
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

  const handleDragEnd = (e) => {
    onDragEnd({
      source: { parentId: e.source.droppableId, index: e.source.index },
      destination: e?.destination?.droppableId
        ? { parentId: e.destination.droppableId, index: e.destination.index }
        : undefined,
    });
  };

  const handleDragStart = (e) => {
    onDragStart(e.draggableId);
  };

  return (
    <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <STree>
        <>{renderItemChildren(root)}</>
      </STree>
    </DragDropContext>
  );
};

export const Tree: FC<ITree> = (props) => {
  return <WrappedTree {...props} />;
};
