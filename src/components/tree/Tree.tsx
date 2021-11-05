import React from "react";
import { STree } from "./styles/STree";
import { TreeItem } from "./TreeItem";
import { IconFolder } from "../../icons/IconFolder";
import { IconAngleRight } from "../../icons";
import STreeItemIconsContainer from "./styles/STreeItemIconsContainer";
import { STreeItemArrow } from "./styles/STreeItemArrow";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export interface ITreeItem {
  id: string | number;
  parent: string | number;
  text: string;
  isLeaf: boolean;
  index: number;
  data?: any;
}

export interface ITreeDropEvent {
  newTreeData: ITreeItem[];
  id: string | number;
  oldIndex: number;
  newIndex: number;
  oldParent: string | number;
  newParent: string | number;
  droppedItem: ITreeItem;
  droppedOn: ITreeItem | undefined;
  treeDataByParent: any;
}

interface ITree {
  treeData: ITreeItem[];
  rootId: string | number;
  onDrop: ({ newTreeData, id, oldIndex, newIndex, newParent, droppedItem, droppedOn }: ITreeDropEvent) => void;
  selected: (id: number | string, treeItem: ITreeItem) => boolean;
  onSelect: (id: number | string, treeItem: ITreeItem) => void;
}

export const Tree: React.FC<ITree> = ({ ...props }) => {
  const [openedNodes, setOpenedNodes] = React.useState<any>([]);
  const onNodeClick = (id: string | number) => {
    const newOpenedNodes = openedNodes.slice();
    if (newOpenedNodes.includes(id)) {
      const index = newOpenedNodes.indexOf(id);
      newOpenedNodes.splice(index, 1);
    } else {
      newOpenedNodes.push(id);
    }
    setOpenedNodes(newOpenedNodes);
  };

  const onDrop = (index: number, newIndex: number, oldParent: number | string, newParent: number | string) => {
    const newTree = props.treeData.slice();
    const itemToMove = newTree[index];
    itemToMove.parent = newParent;
    const droppedOn = newTree.find((item) => item.id === newParent);
    newTree.splice(index, 1);
    newTree.splice(newIndex, 0, itemToMove);

    const treeDataByParent = () => {
      let data: { noParent: ITreeItem[]; directories: ITreeItem[] } = { noParent: [], directories: [] };
      newTree.forEach((item) => {
        if (!item.isLeaf) {
          data.directories.push(item);
        } else if (item.parent === props.rootId) {
          data.noParent.push(item);
        } else {
          if (!data[item.parent]) data = { ...data, [item.parent]: [] };
          data[item.parent].push(item);
        }
      });
      return data;
    };

    props.onDrop({
      newTreeData: newTree,
      id: itemToMove.id,
      oldIndex: index,
      newIndex,
      oldParent,
      newParent,
      droppedItem: itemToMove,
      droppedOn,
      treeDataByParent: treeDataByParent(),
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <STree>
        {props.treeData.map(
          (item, index) =>
            item.parent === props.rootId && (
              <React.Fragment key={item.id}>
                <TreeItem
                  onDrop={(index, newIndex, oldParent, newParent) => onDrop(index, newIndex, oldParent, newParent)}
                  parent={item.parent}
                  index={index}
                  id={item.id}
                  isLeaf={item.isLeaf}
                  onSelect={() => {
                    !item.isLeaf && onNodeClick(item.id);
                    props.onSelect(item.id, item);
                  }}
                  selected={() => props.selected(item.id, item)}
                >
                  {!item.isLeaf ? (
                    <STreeItemIconsContainer style={{ display: "flex" }}>
                      <STreeItemArrow open={openedNodes.includes(item.id)}>
                        <IconAngleRight />
                      </STreeItemArrow>
                      <IconFolder />
                    </STreeItemIconsContainer>
                  ) : null}
                  {item.text}
                </TreeItem>

                {openedNodes.includes(item.id) &&
                  props.treeData.map(
                    (internalItem, internalIndex) =>
                      internalItem.parent === item.id && (
                        <TreeItem
                          onSelect={() => {
                            !item.isLeaf && onNodeClick(internalItem.id);
                            props.onSelect(internalItem.id, internalItem);
                          }}
                          selected={() => props.selected(internalItem.id, internalItem)}
                          style={{ marginLeft: 20 }}
                          key={internalItem.id}
                          onDrop={(index, newIndex, oldParent, newParent) =>
                            onDrop(index, newIndex, oldParent, newParent)
                          }
                          parent={internalItem.parent}
                          index={internalIndex}
                          isLeaf={internalItem.isLeaf}
                          id={internalItem.id}
                        >
                          {internalItem.text}
                        </TreeItem>
                      ),
                  )}
              </React.Fragment>
            ),
        )}
      </STree>
    </DndProvider>
  );
};
