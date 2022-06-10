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

import React, {useContext, useLayoutEffect, useState} from 'react';
import PoppableContext from '../../Poppable.context';
import {ready, getLeft, getTop} from './Triangle.utils';

interface ITriangleProps {
    size: number;
}

// @deprecated do NOT USE
export const Triangle = ({ size = 0 }: ITriangleProps) => {
  const { getBoundingRect } = useContext(PoppableContext);
  
  const [boundingRects, setBoundingRects] = useState<{ elementRect?: any; triggerRect?: any; }>({});
  
  useLayoutEffect(() => {
      const { tbr, rbr } = getBoundingRect() || {};
      setBoundingRects({ elementRect: tbr, triggerRect: rbr });

      setTimeout(() => {
          const { tbr, rbr } = getBoundingRect() || {};
          console.log("Triangle effect", { tbr, rbr });
      }, 300);
  },[]);

  const { elementRect, triggerRect } = boundingRects;
  return !ready(elementRect, triggerRect) ? null : (
    <div
      className="poppable-triangle"
      style={{
        top: getTop(elementRect, triggerRect, size),
        left: getLeft(elementRect, triggerRect, size),
        borderWidth: size,
      }}
    />
  );
};