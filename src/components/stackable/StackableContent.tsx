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

 import React, {useContext, forwardRef, useEffect, useState} from 'react';
 import ReactDOM from 'react-dom';
 import classNames from 'classnames';
 import StackableContext from './Stackable.context';
import { SStackable } from './styles/SStackable';
 
const DEFAULT_Z_INDEX = 1100;

interface IStackableContent {
    zIndex?: number;
    target?: any;
    parent?: any;
    children?: any;
    style?: object;
    className?: string;
    ref?: any;
    onContextMenu?: (e: any) => any;
}

 const StackableContent = forwardRef(({zIndex: zIndexProp, target, parent, children, style, className, ...props} : IStackableContent, ref) => {
     const {depth, ancestors: _ancestors, zIndex: zIndexContext} = useContext(StackableContext);
     const zIndex = zIndexProp ?? zIndexContext ?? DEFAULT_Z_INDEX;
     const [ancestors, setAncestors] = useState('');
     const cls = classNames(`stackable depth-${depth}`, className);
 
     useEffect(() => {
         let ancestors = '';
         if (parent.current) {
            console.log("parent", parent.current)
             let {parentNode} = parent.current;
             while (parentNode && parentNode.className && parentNode.tagName !== 'BODY') {
                 ancestors = `.${parentNode.className.split(' ').join('.')}${ancestors ? ' ' + ancestors : ''}`;
                 parentNode = parentNode.parentNode;
             }
         }
         setAncestors(_ancestors + ancestors);
     }, [setAncestors, _ancestors, parent]);
 
     return ReactDOM.createPortal(
         <StackableContext.Provider value={{zIndex: zIndex + 1, depth: depth + 1, ancestors: `${ancestors} .${cls.split(' ').join('.')}`}}>
             <SStackable {...props} data-ancestors={ancestors} className={classNames(`stackable depth-${depth}`, className)} style={{...style, zIndex}} ref={ref}>
                 {children}
             </SStackable>
         </StackableContext.Provider>,
         target
     );
 });
 
 export default StackableContent;