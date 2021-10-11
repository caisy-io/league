import React from "react";
import { Stackable as WebrixStackable } from "webrix/components";

interface IStackable {
  zIndex?: number;
  target?: Element;
  parent?: React.MutableRefObject<null>;
}
export const Stackable: React.FC<IStackable> = ({ zIndex, ...props }) => {
  return (
    <WebrixStackable zIndex={zIndex || 1100} {...props}>
      {props.children}
    </WebrixStackable>
  );
};
