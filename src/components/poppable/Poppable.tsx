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

import React, {useRef, forwardRef, memo, useCallback} from 'react';
import classNames from 'classnames';
import Stackable from '../stackable';
import {usePosition} from './Poppable.hooks';
import {getClassNames, getBoundingRects} from './Poppable.utils';
import PoppableContext from './Poppable.context';
import { copyComponentRef } from '../../utils/react';
import { SPoppable } from './styles/SPoppable';

interface IPoppable {
    container: any;
    reference: React.MutableRefObject<null>;
    placements: () => void;
    placement: {
        name: string,
        top: number,
        left: number,
    };
    overflow: () => void;
    onPlacement: () => void;
    default: number;
    children: any;
    className: string;
    style: any;
}

const Poppable = forwardRef(({children, container, reference, placements, default: _default, onPlacement, placement, overflow, className, style, ...props}: IPoppable, ref) => {
    const target = useRef();
    const handleOnContextMenu = useCallback(e => e.stopPropagation(), []); // prevent onContextMenu event bubbling from the react portal to the react tree
    const rects = getBoundingRects(target, reference, container, placement);
    console.log("poppable ref", reference)
    usePosition({target, container, reference, placements, default: _default, onPlacement, strategy: overflow});

    console.log('target', target)
    return (
        <SPoppable>
            <Stackable 
                {...props} 
                className={classNames('poppable', {[`placement-${placement.name}`]: placement.name}, className, getClassNames(rects.tbr, rects.rbr))} 
                style={{...style, ...placement}}
                ref={copyComponentRef(ref, target)}
                parent={reference} 
                onContextMenu={handleOnContextMenu}>
                <PoppableContext.Provider value={rects}>
                    {children}
                </PoppableContext.Provider>
            </Stackable>
        </SPoppable>
    );
});

Poppable.displayName = 'Poppable.Manual';

export default memo(Poppable);