import { Children, FC, isValidElement, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { STreeItem } from "./styles/STreeItem";
import TreeContext from "./TreeContext";
import TreeItemContext from "./TreeItemContext";
import { ITreeData, ITreeItem } from "./types";

const TreeItem: FC<{ item: ITreeItem; tree: ITreeData; renderItem: any; isDragEnabled: (item: any) => boolean }> = ({
  children,
  item,
  renderItem,
  isDragEnabled,
}) => {
  const { id } = item;
  const { isExpanded, getIndex, toggleNode } = useContext(TreeContext)!;

  const { level, siblingsLength, index } = useContext(TreeItemContext)!;

  const childrenArray = Children.toArray(children);

  const childrenIncreased = childrenArray.map((child, index) => {
    if (isValidElement(child)) {
      const contextValue = {
        index,
        level: level + 1,
        siblingsLength: childrenArray.length,
      };
      return (
        <TreeItemContext.Provider key={child.key} value={contextValue}>
          {child}
        </TreeItemContext.Provider>
      );
    }
    return null;
  });

  const expanded = isExpanded(id);

  const absoluteIndex = getIndex(id);

  return (
    <Draggable isDragDisabled={!isDragEnabled(item)} index={absoluteIndex} draggableId={`${id}`}>
      {(provided, provider) => (
        <>
          <STreeItem
            onClick={() => toggleNode(id)}
            aria-posinset={index + 1}
            aria-expanded={expanded}
            aria-level={level}
            aria-setsize={siblingsLength}
            data-itemid={`${id}`}
          >
            {renderItem(item, provided, provider)}
          </STreeItem>
          {expanded && childrenIncreased}
        </>
      )}
    </Draggable>
  );
};

export default TreeItem;
