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

import { useBoundingRectObserver } from "../../utils";
import { _window } from "../../utils/mocks";

 
 export const usePosition = ({target, container, reference, placements, default: _default, onPlacement, strategy}) => {
     const {start} = useBoundingRectObserver((rbr, tbr, cbr, wbr) => {
         const {top, left, name} = strategy({tbr, cbr, rbr, wbr}, {default: _default, placements});
         if (!tbr || top !== tbr.top || left !== tbr.left) {
             onPlacement({top, left, name});
         }
     }, reference, target, container, _window);
     start();
 };