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

const Orientations = {
  VERTICAL: { start: "top", size: "height", end: "bottom" },
  HORIZONTAL: { start: "left", size: "width", end: "right" },
};

const before = (rbr, tbr, { start, size }, offset = 0) => ({ [start]: rbr[start] - tbr[size] + offset });
const center = (rbr, tbr, { start, size }, offset = 0) => ({
  [start]: rbr[start] + (rbr[size] - tbr[size]) / 2 + offset,
});
const after = (rbr, _, { start, end }, offset = 0) => ({ [start]: rbr[end] + offset });

type IPlacementFunction = (
  rbr: any,
  tbr: any,
  offset?: number,
) => {
  [x: string]: any;
};

export const vbefore: IPlacementFunction = (rbr, tbr, offset = 0) => before(rbr, tbr, Orientations.VERTICAL, offset);
export const vcenter: IPlacementFunction = (rbr, tbr, offset = 0) => center(rbr, tbr, Orientations.VERTICAL, offset);
export const vafter: IPlacementFunction = (rbr, tbr, offset = 0) => after(rbr, tbr, Orientations.VERTICAL, offset);
export const hbefore: IPlacementFunction = (rbr, tbr, offset = 0) => before(rbr, tbr, Orientations.HORIZONTAL, offset);
export const hcenter: IPlacementFunction = (rbr, tbr, offset = 0) => center(rbr, tbr, Orientations.HORIZONTAL, offset);
export const hafter: IPlacementFunction = (rbr, tbr, offset = 0) => after(rbr, tbr, Orientations.HORIZONTAL, offset);
