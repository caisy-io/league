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

 import React, {useContext} from 'react';
 import { omit } from '../../object';
 import { useObject } from '../../hooks';
 import PuppeteerContext from './Puppeteer.context';

 export const Puppeteer = ({children, props, namespace}) => {
     const ctx = useContext(PuppeteerContext);
     const inherited = ctx[namespace] || {};
     const injected = {...inherited, ...props};
 
     Object.keys(inherited).forEach(prop => {
         if (Object.prototype.hasOwnProperty.call(props, prop)) {
             injected[prop] = (originalProps, prototype) => {
                 return props[prop]({...originalProps, [prop]: inherited[prop](originalProps, prototype)}, prototype);
             }
         }
     });
 
     return (
         <PuppeteerContext.Provider value={useObject({...ctx, [namespace]: injected})}>
             {children}
         </PuppeteerContext.Provider>
     );
 };
 
interface IPuppeteerBreak {
    children?: object;
    props?: any[];
    namespace: string
}

export const PuppeteerBreak = ({children = undefined, props = [], namespace}: IPuppeteerBreak) => {
    const ctx = useContext(PuppeteerContext);
    const inherited = ctx[namespace] || {};

    return (
        <PuppeteerContext.Provider value={{...ctx, [namespace]: props ? omit(inherited, ...props) : {}}}>
            {children}
        </PuppeteerContext.Provider>
    );
 };
 