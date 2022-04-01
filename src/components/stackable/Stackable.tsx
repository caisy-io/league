/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useContext, forwardRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IPlacement } from "../poppable/Poppable";
import StackableContext from "./Stackable.context";
import { SStackable } from "./styles/SStackable";
import { _document } from "../../utils/mocks";

const DEFAULT_Z_INDEX = 1100;

interface IStackable {
  zIndex?: number;
  target?: any;
  parent?: any;
  className?: string;
  style?: object;
  ref?: any;
  children?: any;
  onContextMenu?: (e: any) => any;
  placement?: IPlacement;
}

const Stackable = forwardRef(
  (
    {
      zIndex = DEFAULT_Z_INDEX,
      target = _document instanceof Document ? _document.body : _document,
      parent = {},
      children = null,
      className = "",
      placement,
      ...props
    }: IStackable,
    ref,
  ) => {
    const { depth, ancestors: _ancestors, zIndex: zIndexContext } = useContext(StackableContext);
    const usedZIndex = zIndexContext ?? zIndex;
    const [ancestors, setAncestors] = useState("");
    const cls = `stackable depth-${depth}${className ? className : ""}`;

    useEffect(() => {
      let ancestors = "";
      if (parent.current) {
        let { parentNode } = parent.current;
        while (parentNode && parentNode.className && parentNode.tagName !== "BODY") {
          ancestors = `.${parentNode.className.split(" ").join(".")}${ancestors ? " " + ancestors : ""}`;
          parentNode = parentNode.parentNode;
        }
      }
      setAncestors(_ancestors + ancestors);
    }, [setAncestors, _ancestors, parent]);

    return ReactDOM.createPortal(
      <StackableContext.Provider
        value={{
          zIndex: usedZIndex + 1,
          depth: depth + 1,
          ancestors: `${ancestors} .${cls.split(" ").join(".")}`,
        }}
      >
        <SStackable
          {...props}
          data-ancestors={ancestors}
          placement={placement}
          className={`stackable depth-${depth} ${className ? className : ""}`}
          style={{
            ...props.style,
            zIndex: usedZIndex,
          }}
          ref={ref}
        >
          {children}
        </SStackable>
      </StackableContext.Provider>,
      target,
    );
  },
);

export default Stackable;
