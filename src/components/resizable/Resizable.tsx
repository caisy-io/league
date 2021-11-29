
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

import React, { memo } from 'react';
import { SResizable } from './styles/SResizable';

interface IResizable {
    onBeginResize?: (e: any) => void,
    onResize?: (e: any) => void,
    onEndResize?: (e: any) => void,
    children?: any
}

export const Resizable = ({onBeginResize, onResize, onEndResize, children}: IResizable) => (
    <SResizable>
        {
            React.Children.toArray(children).map(child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {onBeginResize, onResize, onEndResize})
                }
            })
        }
    </SResizable>
);

Resizable.displayName = 'Resizable';

export default memo(Resizable);