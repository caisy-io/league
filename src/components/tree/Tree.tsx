import { Children, FC, isValidElement, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import { STree } from "./styles/STree";
import { Droppable, DragDropContext, DragUpdate, DropResult } from "react-beautiful-dnd";
import { ITree, ITreeItem, ITreeItemDestination, ITreeItemId, ITreeItemMutation, ITreeItemSource } from "./types";
import TreeItemContext from "./TreeItemContext";
import TreeContext from "./TreeContext";
import OuterTreeItem from "./OuterTreeItem";
import TreeItem from "./TreeItem";
import cloneDeep from "lodash/cloneDeep";

const WrappedTree: FC<ITree> = ({ tree, onDragEnd, onDragStart, onExpand, children, onCollapse }) => {
  const childrenArray = Children.toArray(children);
  const nodeIndexRef = useRef<number>(0);
  const [dragOverId, setDragOverId] = useState<string | undefined>(undefined);
  const [draggingId, setDraggingId] = useState(null);

  const isExpanded = useCallback(
    (treeItemId: ITreeItemId) => {
      return tree.items[treeItemId].isExpanded || false;
    },
    [tree],
  );

  const getIndex = useCallback(
    (treeItemId: ITreeItemId) => {
      const firstNodeElement = childrenArray[0] as ReactElement;
      if (treeItemId === firstNodeElement.props.item.id) {
        nodeIndexRef.current = 0;
        return 0;
      } else {
        return ++nodeIndexRef.current;
      }
    },
    [childrenArray, tree],
  );

  const childrenIncreased = childrenArray.map((child, index) => {
    if (isValidElement(child)) {
      const childContextValue = {
        index,
        level: 1,
        siblingsLength: childrenArray.length,
      };
      return (
        <TreeItemContext.Provider key={child.props.itemId} value={childContextValue}>
          {child}
        </TreeItemContext.Provider>
      );
    }
    return null;
  });

  const handleCombine = (destinationId, sourceId) => {
    const sourceParentItem = Object.values(tree.items).find((item) => item.children.includes(sourceId));
    const sourceParentId = sourceParentItem?.id || "";
    const sourceItemIndex = tree.items[sourceParentId].children.findIndex((id) => id === sourceId);

    onDragEnd({
      source: { parentId: sourceParentId, index: sourceItemIndex },
      destination: destinationId ? { parentId: destinationId, index: 0 } : undefined,
    });
  };

  const handleDragEnd = (result: DropResult) => {
    const { combine, source, destination, draggableId } = result;

    if (combine) {
      if (!tree.items[combine.draggableId].hasChildren) return;

      const destinationId = combine.draggableId;
      const sourceId = draggableId;

      return handleCombine(destinationId, sourceId);
    }
    if (!destination) return;
    const itemsArray = Object.values(tree.items);

    const root = document.getElementById(`${tree.rootId}`);
    const destinationItemId =
      root?.children?.item?.(destination.index)?.getAttribute("data-itemid") || `${tree.rootId}`;
    const sourceItemId = draggableId;
    if (destinationItemId === sourceItemId) return;

    const destinationItem = tree.items[destinationItemId];

    const destinationParentItem = destinationItem.isExpanded
      ? destinationItem
      : itemsArray.find((item) => item.children.includes(destinationItemId));

    let destinationParentId = destinationParentItem?.id || "";
    const sourceParentId = itemsArray.find((item) => item.children.includes(sourceItemId))?.id || "";

    let destinationItemIndex = tree.items[destinationParentId].children.findIndex((id) => id === destinationItemId);
    const sourceItemIndex = tree.items[sourceParentId].children.findIndex((id) => id === sourceItemId);

    if (destinationParentId !== sourceParentId && destination.index > source.index) {
      destinationItemIndex++;
    }

    if (destinationItemIndex === -1) {
      destinationParentId = itemsArray.find((item) => item.children.includes(destinationItemId))?.id || "";
      destinationItemIndex = tree.items[destinationParentId].children.findIndex((id) => id === destinationItemId);
    }

    setDraggingId(null);

    onDragEnd({
      source: { parentId: sourceParentId, index: sourceItemIndex },
      destination: destination?.droppableId
        ? { parentId: destinationParentId, index: destinationItemIndex }
        : undefined,
    });
  };

  const handleDragStart = (e) => {
    setDraggingId(e.draggableId);
    onDragStart(e.draggableId);
  };

  const handleDragUpdate = ({ combine, destination }: DragUpdate) => {
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

  const handleBeforeCapture = (e) => {
    if (isExpanded(e.draggableId)) {
      onCollapse?.(e.draggableId);
    }
  };

  const contextValue = {
    isExpanded,
    toggleNode,
    getIndex,
  };

  return (
    <TreeContext.Provider value={contextValue}>
      <DragDropContext
        onBeforeCapture={handleBeforeCapture}
        onDragUpdate={handleDragUpdate}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Droppable isCombineEnabled droppableId={`${tree.rootId}`}>
          {({ innerRef, droppableProps, placeholder }) => (
            <STree id={`${tree.rootId}`} {...droppableProps} ref={innerRef}>
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

  const root = useMemo(() => {
    return { ...tree.items[tree.rootId], isExpanded: true };
  }, [tree]);

  return (
    <WrappedTree {...props}>
      {root.children.map((itemId) => {
        return (
          <TreeItem
            isDragEnabled={props.isDragEnabled}
            renderItem={props.renderItem}
            key={itemId}
            item={tree.items[itemId]}
            tree={tree}
          >
            <OuterTreeItem
              isDragEnabled={props.isDragEnabled}
              renderItem={props.renderItem}
              item={tree.items[itemId]}
              tree={tree}
            />
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
  const newTree = cloneDeep(tree);

  newTree.items[itemId] = { ...newTree.items[itemId], ...mutation };

  return newTree;
};

export const moveItemOnTree = (
  tree: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> },
  from: ITreeItemSource,
  to: ITreeItemDestination,
) => {
  const newTree = cloneDeep(tree);

  const itemId = newTree.items[from.parentId].children[from.index];

  newTree.items[from.parentId].children.splice(from.index, 1);

  newTree.items[to.parentId].children.splice(to.index, 0, itemId);

  return newTree;
};
