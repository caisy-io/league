import React from "react";
import {
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

export type ITreeItemId = string | number;

export interface ITreeItem {
  id: ITreeItemId;
  children: ITreeItemId[];
  hasChildren?: boolean;
  isExpanded?: boolean;
  isChildrenLoading?: boolean;
  data?: any;
}

export interface ITreeItemSource {
  parentId: ITreeItemId;
  index: number;
}

export interface ITreeItemDestination {
  parentId: ITreeItemId;
  index: number;
}

export type IOnDragEnd = (input: { source: ITreeItemSource; destination?: ITreeItemDestination }) => void;

export type IOnDragStart = (draggableId: ITreeItemId) => void;

export type ITreeRenderItem = (
  item: ITreeItem,
  provider?: DraggableProvided,
  provided?: DraggableStateSnapshot,
) => React.ReactNode;

export interface ITreeData {
  rootId: ITreeItemId;
  items: Record<ITreeItemId, ITreeItem>;
}

export interface ITree {
  tree: ITreeData;
  isDragEnabled: (item: ITreeItem) => boolean;
  onDragEnd: IOnDragEnd;
  onDragStart: IOnDragStart;
  onExpand?: (itemId: ITreeItemId) => void;
  onCollapse?: (itemId: ITreeItemId) => void;
  renderItem: ITreeRenderItem;
}

export interface ITreeItemMutation {
  id?: ITreeItemId;
  children?: ITreeItemId[];
  hasChildren?: boolean;
  isExpanded?: boolean;
  isChildrenLoading?: boolean;
  data?: any;
}
