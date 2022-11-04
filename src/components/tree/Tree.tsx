import { Children, FC, isValidElement, useCallback, useRef, useState } from "react";
import { STree } from "./styles/STree";
import { Droppable, Draggable, DragDropContext, DragUpdate, DropResult } from "react-beautiful-dnd";
import { ITree, ITreeItem, ITreeItemDestination, ITreeItemId, ITreeItemMutation, ITreeItemSource } from "./types";
import TreeItemContext from "./TreeItemContext";
import TreeContext from "./TreeContext";
import OuterTreeItem from "./OuterTreeItem";
import TreeItem from "./TreeItem";

const WrappedTree: FC<ITree> = ({ tree, onDragEnd, onDragStart, onExpand, children, onCollapse }) => {
  const childrenArray = Children.toArray(children);
  const nodeIndexRef = useRef<number>(0);

  console.log(childrenArray);

  const isExpanded = useCallback(
    (treeItemId: ITreeItemId) => {
      return tree.items[treeItemId].isExpanded || false;
    },
    [tree],
  );

  const getIndex = useCallback(
    (treeItemId: ITreeItemId) => {
      const firstNodeElement = childrenArray[0] as React.ReactElement;
      if (treeItemId === firstNodeElement.props.treeItemId) {
        nodeIndexRef.current = 0;
        return 0;
      } else {
        return ++nodeIndexRef.current;
      }
    },
    [childrenArray],
  );

  const childrenIncreased = childrenArray.map((child, index) => {
    if (isValidElement(child)) {
      const childContextValue = {
        index,
        level: 1,
        siblingsLength: childrenArray.length,
      };
      return <TreeItemContext.Provider value={childContextValue}>{child}</TreeItemContext.Provider>;
    }
    return null;
  });

  const [dragOverId, setDragOverId] = useState<string | undefined>(undefined);
  const [draggingId, setDraggingId] = useState(null);

  const handleCombine = (index, draggableId) => {
    console.log(index, draggableId);
  };

  const handleDragEnd = ({ source, combine, destination }: DropResult) => {
    setDraggingId(null);
    if (combine) {
      const { index } = source;
      const { draggableId } = combine;

      handleCombine(index, draggableId);

      return;
    }

    onDragEnd({
      source: { parentId: source.droppableId, index: source.index },
      destination: destination?.droppableId
        ? { parentId: destination.droppableId, index: destination.index }
        : undefined,
    });
  };

  const handleDragStart = (e) => {
    // if (tree.items[e.draggableId].isExpanded) {
    //   onCollapse?.(e.draggableId);
    // }
    onDragStart(e.draggableId);
  };

  const handleDragUpdate = ({ combine }: DragUpdate) => {
    setDragOverId(combine ? combine.draggableId : combine);
  };

  const toggleNode = useCallback(
    (itemId: ITreeItemId) => {
      if (isExpanded(itemId)) {
        onCollapse?.(itemId);
      } else {
        onExpand?.(itemId);
      }
    },
    [onExpand, onCollapse, tree],
  );

  const contextValue = {
    isExpanded,
    toggleNode,
    getIndex,
  };

  return (
    <TreeContext.Provider value={contextValue}>
      <DragDropContext onDragUpdate={handleDragUpdate} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable isCombineEnabled droppableId={`${tree.rootId}`}>
          {({ innerRef, droppableProps, placeholder }) => (
            <STree {...droppableProps} ref={innerRef}>
              <>{childrenIncreased}</>
              {placeholder}
            </STree>
          )}
        </Droppable>
      </DragDropContext>
    </TreeContext.Provider>
  );
};

export const Tree: FC<ITree> = (props) => {
  const { tree } = props;

  const root = { ...tree.items[tree.rootId], isExpanded: true };

  return (
    <WrappedTree {...props}>
      {root.children.map((itemId) => {
        return (
          <TreeItem item={tree.items[itemId]} tree={tree}>
            <OuterTreeItem item={tree.items[itemId]} tree={tree} />
          </TreeItem>
        );
      })}
    </WrappedTree>
  );
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

export const moveItemOnTree = (
  tree: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> },
  from: ITreeItemSource,
  to: ITreeItemDestination,
) => {
  if (!to) return tree;

  const newTree = { ...tree };

  const itemId = newTree.items[from.parentId].children[from.index];

  newTree.items[from.parentId].children.splice(from.index, 1);

  newTree.items[to.parentId].children.splice(to.index, 0, itemId);

  return newTree;
};
