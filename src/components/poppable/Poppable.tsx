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
import { usePosition } from './Poppable.hooks';
import { getClassNames, getBoundingRects } from './Poppable.utils';
import PoppableContext from './Poppable.context';
import { copyComponentRef } from '../../utils/react';
import { SPoppable } from './styles/SPoppable';
import strategy from './strategies';
import { HIDDEN_PLACEMENT } from './Poppable.constants';

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
    style: any;
}

const Poppable = forwardRef(({
    children, 
    container = window, 
    reference = document.body, 
    placements = () => [{top: 0, left: 0}], 
    default: _default, 
    onPlacement = () => null, 
    placement = HIDDEN_PLACEMENT, 
    overflow = strategy, 
    className, 
    style, 
    ...props
}: IPoppable, ref) => {

    const target = useRef();
    const handleOnContextMenu = useCallback(e => e.stopPropagation(), []); // prevent onContextMenu event bubbling from the react portal to the react tree
    const rects = getBoundingRects(target, reference, container, placement);
    usePosition({target, container, reference, placements, default: _default, onPlacement, strategy: overflow});

    return (
        <Stackable
            {...props} 
            className={classNames('poppable', {[`placement-${placement.name}`]: placement.name}, className, getClassNames(rects.tbr, rects.rbr))} 
            // TODO Dont put these styles as inline styles
            style={{...style, ...placement, "backgroundColor":"blue","color":"white","textTransform":"uppercase","fontSize":"0.9em","width":"100px","height":"100px","display":"flex","alignItems":"center","justifyContent":"center","position":"absolute","userSelect":"none","overflow":"hidden"}}
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