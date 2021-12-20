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

import { area, intersect, union } from "../../../utils/rect";


/**
 * Measure the horizontal & vertical distance between a & b and return an absolute value
 * representing the addition of the two (to be used for sorting based on distance).
 * NOTE: this is not the real distance between two rectangles, but it is good enough
 * for sorting purposes.
 *
 * @param a
 * @param b
 * @return {number}
 */
export const distance = (a, b) => Math.abs(a.left - b.left) + Math.abs(a.top - b.top);
 
/**
 * Sort the placements based on their overflowing area (from least overflowing to most overflowing)
 * and then by their distance from the desired placements (from closest to furthest)
 *
 * @param placements {array}
 * @param desired {DOMRect}
 * @param tbr {DOMRect}
 * @param cbr {DOMRect}
 * @returns {*}
 */
 export const sortPlacements = (placements, desired, tbr, cbr) => placements.sort((a, b) => {
    return area(union(new DOMRect(b.left, b.top, tbr.width, tbr.height), cbr)) - area(union(new DOMRect(a.left, a.top, tbr.width, tbr.height), cbr))
    || distance(a, desired) - distance(b, desired);
})
 
/**
 * Remove any invalid placement (i.e. a placement that will result in the target element overflowing the container)
 *
 * @param {Array} placements
 * @param {DOMRect} tbr Target Bounding Rect
 * @param {DOMRect} cbr Container Bounding Rect
 * @returns {Array}
 */
export const filterPlacements = (placements, tbr, cbr) => (
    placements.filter(p =>
        intersect(new DOMRect(p.left, p.top, tbr.width, tbr.height), cbr)
    )
);

/**
 * This overflow recovery strategy repositions the target based on a list of valid placements.
 * The placements are first filtered out, removing any placement that is entirely outside
 * the cbr. Then the placements are sorted based on their non-overflowing area (from less
 * overflowing to more overflowing) and by their distance from the desired (default) placement
 * (from closest to furthest). Finally, the first placement in the resulting array is picked.
 *
 * @param {Array} placements
 * @param {Object} desired The desired positioning
 * @param {Object} rbr Reference Bounding Rect
 * @param {Object} tbr Target Bounding Rect
 * @param {Object} cbr Container Bounding Rect
 * @param {Object} wbr Winådow Bounding Rect
 * @returns {{top: *, left: *}}
 */
const repositionStrategy = ({tbr, cbr, rbr}, {placements, default: _default}) => {
    const _placements = placements(rbr, tbr);
    const desired = _placements[_default];
    const {top, left} = sortPlacements(filterPlacements(_placements, tbr, cbr), desired, tbr, cbr)[0] || desired;
    return new DOMRect(left, top, tbr.width, tbr.height);
};

export default repositionStrategy;