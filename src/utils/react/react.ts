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

 import React from 'react';
 import {isArray, isObject} from '../types';
 
 /**
  * This function allows us to maintain an internal reference, and at
  * the same time maintain an external reference, if such was provided.
  * See https://github.com/facebook/react/issues/8873
  *
  * @example
  * const MyComponent = forwardRef((props, ref) => {
  *     const internalRef = useRef();
  *     return (
  *         <div ref={copyComponentRef(ref, internalRef)}/>
  *     );
  * });
  *
  * @param external {function|object} The external ref
  * @param internal {object} The internal ref
  */
 export const copyComponentRef = (external, internal) => node => {
     if (typeof external === 'function') {
         external(node);
     }
     if (external && Object.prototype.hasOwnProperty.call(external, 'current')) {
         external.current = node;
     }
     internal.current = node;
 };
 
 /**
  * A comparison function for React.memo that deeply checks for children prop changes.
  * This comparison function aims to solve the issue that nested children cause
  * for memo'd component. The issue is that nested children defeats memoization, since
  * they always generate a new reference.
  *
  *
  *
  * @example
  * // Consider the following example:
  *
  * const Memoized = React.memo(({ children }) => (<div>{children}</div>));
  * // Won't ever re-render
  * <Memoized>bar</Memoized>
  * // Will re-render every time; the memoization does nothing
  * <Memoized><b>bar</b></Memoized>
  *
  * // This occurs because `<b>bar</b>` is just syntactic sugar for `React.createElement('b', {children: 'bar'})`,
  * // which means that it generates a new reference every time, causing React.memo() default memoization
  * // to return false every time.
  * //
  * // To solve this, you can use `memoizeChildren()`:
  *
  * const Memoized = React.memo(({ children }) => (<div>{children}</div>), memoizeChildren);
  * // Won't ever re-render
  * <Memoized><b>bar</b></Memoized>
  *
  * @param {object} prev The previous props
  * @param {object} next The next props
  * @returns {boolean} True if rendering the component with the next props will produce the same result as with the previous props
  */
 export const memoizeChildren = (prev, next) => Object.keys(prev).every(name => {
     if (name === 'children') {
         const t = React.Children.toArray; // This also removes values like null/false/undefined
         return memoizeArray(t(prev[name]), t(next[name]));
     }
     return prev[name] === next[name];
 });
 
 const isComponent = child => isObject(child) && Object.prototype.hasOwnProperty.call(child, 'props');
 
 const memoizeArray = (prev, next) => prev.every((_, i) => {
     if (isComponent(prev[i]) && isComponent(next[i])) {
         return memoizeChildren(prev[i].props, next[i].props);
     }
     if (isArray(prev[i]) && isArray(next[i])) {
         return memoizeArray(prev[i], next[i]);
     }
     return prev[i] === next[i];
 });