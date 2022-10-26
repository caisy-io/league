import { FC, Fragment } from "react";
import { STree } from "./styles/STree";
import { STreeItem } from "./styles/STreeItem";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { STreeDroppable } from "./styles/STreeDroppable";
import { STreeDraggable } from "./styles/STreeDraggable";
import { ITree, ITreeItem, ITreeItemId, ITreeItemMutation } from "./types";

const WrappedTree: FC<ITree> = ({ tree, onDragEnd, onDragStart, isDragEnabled, onCollapse, onExpand }) => {
  const renderItemChildren = (item: ITreeItem) => {
    if (!item.hasChildren) return null;

    return (
      <>
        {item.children.map((nestedItemId, nestedItemIndex) => {
          const nestedItem = tree.items[nestedItemId];

          return (
            <Fragment key={nestedItem.id}>
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
                      <STreeItem
                        onClick={
                          nestedItem.isExpanded ? () => onCollapse?.(nestedItem.id) : () => onExpand?.(nestedItem.id)
                        }
                      >
                        {nestedItem.data.title}
                      </STreeItem>
                      {nestedItem.isExpanded && <>{renderItemChildren(nestedItem)}</>}
                      {provided.placeholder}
                    </STreeDroppable>
                  )}
                </Droppable>
              )}
            </Fragment>
          );
        })}
      </>
    );
  };

  const root = { ...tree.items[tree.rootId], isExpanded: true };

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

export const mutateTree = (
  tree: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> },
  itemId: ITreeItemId,
  mutation: ITreeItemMutation,
) => {
  const newTree = { ...tree };

  newTree.items[itemId] = { ...newTree.items[itemId], ...mutation };

  return newTree;
};
