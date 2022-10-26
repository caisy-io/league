import React, { useState } from "react";
import { Tree, ITreeItemId, ITreeItem, IOnDragEnd } from "./";
import { moveItemOnTree, mutateTree } from "./Tree";

const TREE: { rootId: ITreeItemId; items: Record<ITreeItemId, ITreeItem> } = {
  rootId: "rootId",
  items: {
    rootId: { id: "rootId", children: ["default", "pinned"], hasChildren: true },
    default: {
      id: "default",
      children: ["1", "2", "3"],
      hasChildren: true,
      data: { title: "Default", id: "default" },
    },
    pinned: { id: "pinned", children: ["4", "5"], hasChildren: true, data: { title: "Pinned", id: "pinned" } },
    // innerDefault: {
    //   id: "innerDefault",
    //   children: ["6"],
    //   hasChildren: true,
    //   data: { title: "Inner default", id: "innerDefault" },
    // },
    "1": { id: "1", children: [], data: { title: "asd 1", id: "1" } },
    "2": { id: "2", children: [], data: { title: "asd 2", id: "2" } },
    "3": { id: "3", children: [], data: { title: "asd 3", id: "3" } },
    "4": { id: "4", children: [], data: { title: "pinned 1", id: "4" } },
    "5": { id: "5", children: [], data: { title: "pinned 2", id: "5" } },
    "6": { id: "6", children: [], data: { title: "innerDefault 1", id: "6" } },
  },
};

export const Default = ({}) => {
  const [tree, setTree] = useState(TREE);

  const onExpand = (itemId: ITreeItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: true }));
  };

  const onCollapse = (itemId: ITreeItemId) => {
    setTree(mutateTree(tree, itemId, { isExpanded: false }));
  };

  const renderItem = (item: ITreeItem) => {
    return <div style={{ border: "1px solid grey", padding: "4px 2px" }}>{item.data.title}</div>;
  };

  const onDragEnd = (input) => {
    setTree(moveItemOnTree(tree, input.source, input.destination));
  };

  return (
    <Tree
      renderItem={renderItem}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onDragStart={console.log}
      onDragEnd={onDragEnd}
      tree={tree}
    />
  );
};

export default {
  title: "Components/Tree",
  component: Default,
  //   parameters: {
  // design: {
  // type: "figma",
  // url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1054%3A16321",
  // },
  //   },
  //   argTypes: {},
};

Default.args = {};
