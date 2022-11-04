import React from "react";
import { ITreeItemId, ITreeItem } from "..";

type ITreeContext = {
  isExpanded: (treeItemId: ITreeItemId) => boolean;
  toggleNode: (treeItemId: ITreeItemId) => void;
  getIndex: (treeItemId: ITreeItemId) => number;
};

export default React.createContext<ITreeContext | null>(null);
