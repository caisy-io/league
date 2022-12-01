import { FC } from "react";
import TreeItem from "./TreeItem";
import { ITreeData, ITreeItem } from "./types";

const OuterTreeItem: FC<{ item: ITreeItem; tree: ITreeData; renderItem: any }> = ({ item, tree, renderItem }) => {
  return (
    <>
      {item.children.map((internalItemId) => (
        <TreeItem renderItem={renderItem} key={internalItemId} item={tree.items[internalItemId]} tree={tree}>
          <OuterTreeItem renderItem={renderItem} item={tree.items[internalItemId]} tree={tree} />
        </TreeItem>
      ))}
    </>
  );
};

export default OuterTreeItem;
