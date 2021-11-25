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
import Stackable from '../stackable';
import { copyComponentRef } from '../../utils/react';
import { SPoppable } from './styles/SPoppable';
import strategy from './strategies';
import { HIDDEN_PLACEMENT } from './Poppable.constants';
import { usePosition } from './Poppable.hooks';
import PoppableContext from './Poppable.context';
import { getBoundingRects, getClassNames } from './Poppable.utils';

interface IPoppable {
    container: any;
    reference: React.MutableRefObject<null> | HTMLElement;
    placements: () => void;
    placement: {
        name: string,
        top: number,
        left: number,
    };
    overflow: (rects: any, props: any) => { top: number; left: number; name: string; } | DOMRect;
    onPlacement: () => void;
    default: number;
    children: any;
    className: string;
    style: object;
}

const Poppable = forwardRef(({
    children = null, 
    container = window, 
    reference = document.body, 
    placements = () => [{top: 0, left: 0}],
    onPlacement = () => null, 
    placement = HIDDEN_PLACEMENT, 
    overflow = strategy, 
    className = '', 
    style = {}, 
    ...props
}: IPoppable, ref) => {

    const target = useRef();
    const handleOnContextMenu = useCallback(e => e.stopPropagation(), []); // prevent onContextMenu event bubbling from the react portal to the react tree
    const rects = getBoundingRects(target, reference, container, placement);
    usePosition({target, container, reference, placements, default: props.default ?? 0, onPlacement, strategy: overflow});

    const placementName =  placement.name !== undefined ? {[`placement-${placement.name}`]: placement.name} + " " : "";
    
    return (
        <Stackable
            {...props} 
            className={'poppable ' +  placementName + className + " " + getClassNames(rects.tbr, rects.rbr)} 
            style={{...style, ...placement}}
            ref={copyComponentRef(ref, target)}
            parent={reference} 
            onContextMenu={handleOnContextMenu}>
            <PoppableContext.Provider value={rects}>
                <SPoppable>
                    {children}
                </SPoppable>
            </PoppableContext.Provider>
        </Stackable>
    );
});

Poppable.displayName = 'Poppable.Manual';

export default memo(Poppable);