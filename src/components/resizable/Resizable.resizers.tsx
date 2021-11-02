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

import React, {useCallback, memo} from 'react';
import { Movable } from '../movable';

const INITIAL = {top: 0, left: 0, width: 0, height: 0};

interface IResizer {
    direction?: string, 
    onBeginResize?: any, 
    onResize?: any, 
    onEndResize?: any
}

const Resizer = ({direction, onBeginResize, onResize, onEndResize}: IResizer) => (
    <Movable
        className={`resizable ${direction}-resizer`}
        onBeginMove={onBeginResize}
        onMove={onResize}
        onEndMove={onEndResize}/>
);

const Left = memo(props => {
    //@ts-ignore
    const { onResize } = props;
    const handleOnResize = useCallback(({dx, cx}) => (
        onResize({
            delta: {...INITIAL, left: dx, width: -dx},
            change: {...INITIAL, left: cx, width: -cx},
        })
    ), [onResize]);
    return (
        <Resizer {...props} onResize={handleOnResize} direction='left'/>
    );
});

Left.displayName = 'Resizable.Resizer.Left';

const Right = memo(props => {
    //@ts-ignore
    const { onResize } = props;
    const handleOnResize = useCallback(({dx, cx}) => (
        onResize({
            delta: {...INITIAL, width: dx},
            change: {...INITIAL, width: cx},
        })
    ), [onResize]);
    return (
        <Resizer {...props} onResize={handleOnResize} direction='right'/>
    );
});

Right.displayName = 'Resizable.Resizer.Right';

export {Left, Right};