import { FC } from "react";
import TreeItem from "./TreeItem";
import { ITreeData, ITreeItem } from "./types";

const OuterTreeItem: FC<{ item: ITreeItem; tree: ITreeData }> = ({ item, tree }) => {
  return (
    <>
      {item.children.map((internalItemId) => (
        <TreeItem key={internalItemId} item={tree.items[internalItemId]} tree={tree}>
          <OuterTreeItem item={tree.items[internalItemId]} tree={tree} />
        </TreeItem>
      ))}
    </>
  );
};

export default OuterTreeItem;
