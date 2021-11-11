import React from "react";
import { getAncestors } from "./Stackable.utils";
import StackableContent from "./StackableContent";

interface IStackable {
  zIndex?: number;
  target?: Element;
  parent?: React.MutableRefObject<null>;
}
export const Stackable: React.FC<IStackable> = ({ zIndex, ...props }) => {
  const target = props.target || (typeof window !== "undefined" && document.body);
  const parent = props.parent || getAncestors(target);

  return (
    <StackableContent zIndex={zIndex || 1100} {...props} target={target} parent={parent}>
      {props.children}
    </StackableContent>
  );
};
