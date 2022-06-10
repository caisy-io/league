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

import { intersection, midpoint } from "../../../../utils/range";


 export const getTop = (element, trigger, size) => {
     const isn = intersection([element.top, element.bottom], [trigger.top, trigger.bottom]);
     if (isn.length === 0) {
         return element.top > trigger.bottom ? element.top - size * 2 : element.bottom;
     }
     return midpoint(isn) - size;
 };
 
 export const getLeft = (element, trigger, size) => {
     const isn = intersection([element.left, element.right], [trigger.left, trigger.right]);
     if (isn.length === 0) {
         return element.left > trigger.right ? element.left - size * 2 : element.right;
     }
     return midpoint(isn) - size;
 };
 
 export const ready = (element, trigger) => element?.top !== undefined && trigger?.top !== undefined;