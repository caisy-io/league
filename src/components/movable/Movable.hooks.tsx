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

 import {useRef, useCallback} from 'react';

 export const useMove = ops => {
     const shared = useRef({});
 
     const onBeginMove = useCallback(e => {
         ops.forEach(({onBeginMove}) => onBeginMove(e, shared.current));
     }, [ops]);
 
     const onMove = useCallback(e => {
         ops.forEach(({onMove}) => onMove(e, shared.current));
     }, [ops]);
 
     const onEndMove = useCallback(e => {
         ops.forEach(({onEndMove}) => onEndMove(e, shared.current))
     }, [ops]);
 
     return {onBeginMove, onMove, onEndMove};
 };