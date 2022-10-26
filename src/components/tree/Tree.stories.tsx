import React, { useState } from "react";
import { Tree, ITreeItemId, ITreeItem } from "./Tree";
import { DragDropContext } from "react-beautiful-dnd";

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

  return <Tree onDragStart={console.log} onDragEnd={console.log} tree={tree} />;
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
