import React from "react";
import { documentRenderer, ElementType } from "./renderer";

export const RichTextRenderer: React.FC<{
  node: any;
  overwrites?: Record<ElementType, React.FC<{ node: any }> | null>;
}> = ({ node, overwrites }) => {
  if (!node) {
    return null;
  }
  const renderer = documentRenderer((overwrites as any) || {});
  return <>{renderer(node)}</>;
};
