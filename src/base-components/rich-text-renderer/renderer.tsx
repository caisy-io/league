import React, { FC } from "react";
import BlockQuote from "./nodes/BlockQuote";
import BulletList from "./nodes/BulletList";
import CodeBlock from "./nodes/CodeBlock";
import Doc from "./nodes/Doc";
import HardBreak from "./nodes/HardBreak";
import Heading from "./nodes/Heading";
import IFrame from "./nodes/IFrame";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";
import Table from "./nodes/Table";
import TableCel from "./nodes/TableCell";
import TableRow from "./nodes/TableRow";
import Text from "./nodes/Text";

export type ElementType =
  | "doc"
  | "hardBreak"
  | "paragraph"
  | "codeBlock"
  | "blockquote"
  | "bulletList"
  | "orderedList"
  | "listItem"
  | "heading"
  | "iframe"
  | "table"
  | "tableRow"
  | "tableCell"
  | "text";

export const DEFAULT_BLOCK_MAP: Record<ElementType, FC<{ node: any; children: React.ReactNode }>> = {
  doc: Doc,
  hardBreak: HardBreak,
  paragraph: Paragraph,
  codeBlock: CodeBlock,
  blockquote: BlockQuote,
  bulletList: BulletList,
  orderedList: OrderedList,
  listItem: ListItem,
  heading: Heading,
  iframe: IFrame,
  table: Table,
  tableRow: TableRow,
  tableCell: TableCel,
  text: Text,
};

export const documentRenderer = (blockMap: Record<ElementType, FC<{ node: any; children: React.ReactNode }>>) => {
  const BLOCKS = { ...DEFAULT_BLOCK_MAP, ...blockMap };

  const renderNode = (currNode: any, level?: number) => {
    const Element = BLOCKS[currNode.type];

    if (!Element) {
      console.log("renderNode -> missing node type:", currNode.type);
      return null;
    }

    return (
      <Element key={`node-${currNode.type}-${level}`} node={currNode}>
        {currNode.content?.map(renderNode)}
      </Element>
    );
  };

  return renderNode;
};

export default documentRenderer(DEFAULT_BLOCK_MAP);
