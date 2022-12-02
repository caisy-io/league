import { FC } from "react";
import TreeItem from "./TreeItem";
import { ITreeData, ITreeItem } from "./types";

const OuterTreeItem: FC<{ item: ITreeItem; tree: ITreeData; renderItem: any; isDragEnabled: (item: any) => boolean }> =
  ({ item, tree, renderItem, isDragEnabled }) => {
    return (
      <>
        {item.children.map((internalItemId) => (
          <TreeItem
            isDragEnabled={isDragEnabled}
            renderItem={renderItem}
            key={internalItemId}
            item={tree.items[internalItemId]}
            tree={tree}
          >
            <OuterTreeItem
              isDragEnabled={isDragEnabled}
              renderItem={renderItem}
              item={tree.items[internalItemId]}
              tree={tree}
            />
          </TreeItem>
        ))}
      </>
    );
  };

export default OuterTreeItem;
