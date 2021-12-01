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

/**
 * Call the given handlers with a normalized version of a move event.
 *
 * @param onBeginMove {function}
 * @param onMove {function}
 * @param onEndMove {function}
 * @return {{move: function, start: function, end: function}}
 */
 export const moveTracker = (onBeginMove, onMove, onEndMove) => {
    let initial = {x: 0, y: 0};
    let previous = {x: 0, y: 0};

    const event = e => ({
        ...e,
        cx: e.x - previous.x,
        cy: e.y - previous.y,
        dx: e.x - initial.x,
        dy: e.y - initial.y,
    });

    return {
        start: e => {
            initial = {x: e.x, y: e.y};
            previous = {...initial};
            onBeginMove(event(e));
        },
        move: e => {
            onMove(event(e));
            previous = {x: e.x, y: e.y};
        },
        end: e => {
            onEndMove(event(e));
        },
    }
};

/**
 * Add document event listeners needed for mouse tracking.
 *
 * @param tracker {object} The return value of useMovementTracker()
 * @return {function}
 */
export const mouseTracker = tracker => {

    const event = e => ({
        x: e.clientX,
        y: e.clientY,
        target: e.target,
        stopPropagation: () => e.stopPropagation(),
        preventDefault: () => e.preventDefault(),
    });

    const onMouseDown = e => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        tracker.start(event(e));
    };

    const onMouseMove = e => {
        tracker.move(event(e));
    };

    const onMouseUp = e => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        tracker.end(event(e));
    };

    return onMouseDown;
};

/**
 * Add document event listeners needed for touch tracking.
 *
 * @param tracker {object} The return value of useMovementTracker()
 * @return {function} The touchstart event handler
 */
export const touchTracker = tracker => {

    const event = e => ({
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
        target: e.changedTouches[0].target,
        stopPropagation: () => e.stopPropagation(),
        preventDefault: () => e.preventDefault(),
    });

    const onTouchStart = e => {
        // We call e.preventDefault() to prevent the mouse event from also being delivered
        // See https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
        e.preventDefault();
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
        tracker.start(event(e));
    };

    const onTouchMove = e => {
        // e.preventDefault(); // Prevent scrolling
        tracker.move(event(e));
    };

    const onTouchEnd = e => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        tracker.end(event(e));
    };

    return onTouchStart;
};