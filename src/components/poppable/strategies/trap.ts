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

import { clamp } from "../../../utils/number";


 /**
  * This overflow recovery strategy "traps" the target within the window
  *
  * @param tbr {DOMRect} Target Bounding Rect
  * @param wbr {DOMRect} Window Bounding Rect
  * @returns {{top: number, left: number}}
  */
 export default ({tbr, cbr}) => new DOMRect(
    Math.round(clamp(tbr.left, cbr.left, cbr.right - tbr.width)),
    Math.round(clamp(tbr.top, cbr.top, cbr.bottom - tbr.height)),
    tbr.width,
    tbr.height,
);