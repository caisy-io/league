/* 
AUTHOR: kunukn
MIT License
LINK: https://github.com/kunukn/react-collapse/blob/master/src/components/collapse/Collapse.jsx
*/

import React, { useState, useEffect, useRef, useCallback, useReducer } from "react";

// using let instead of const,
// experimenting with ES2015 bundle which gets a bit smaller when using let over const.
const COLLAPSED = "collapsed";
const COLLAPSING = "collapsing";
const EXPANDING = "expanding";
const EXPANDED = "expanded";

const defaultClassName = "collapse-css-transition";
const defaultElementType = "div";
const defaultCollapseHeight = "0px";

/**
 *
 * @param {function} callback
 */
function nextFrame(callback) {
  requestAnimationFrame(function () {
    //setTimeout(callback, 0); // NOT used because can be jumpy if click-spamming.
    requestAnimationFrame(callback); // This is used.
  });
}

export function CollapseWrapper({
  children,
  transition,
  style,
  render,
  elementType = defaultElementType,
  isOpen,
  collapseHeight = defaultCollapseHeight,
  onInit,
  onChange,
  className = defaultClassName,
  addState,
  noAnim,
  overflowOnExpanded,
  ...rest
}) {
  const getCollapsedVisibility = () => (collapseHeight === "0px" ? "hidden" : "");

  const [__, forceUpdate] = useReducer((_) => _ + 1, 0);

  const elementRef = useRef();
  const [callbackTick, setCallbackTick] = useState(0);

  // Avoiding setState to control when stuff are updated.
  // Might not be needed.
  const state = useRef({
    collapse: isOpen ? EXPANDED : COLLAPSED,
    style: {
      height: isOpen ? "" : collapseHeight,
      visibility: isOpen ? "" : getCollapsedVisibility(),
    },
  }).current;

  useEffect(() => {
    // Invoke callback when data are updated, use Effect to sync state.
    callbackTick && onCallback(onChange);
  }, [callbackTick]);

  /**
   *
   * @param {function} callback
   */
  const onCallback = (callback, params = {}) => {
    if (callback) {
      callback({ state: state.collapse, style: state.style, ...params });
    }
  };

  function setCollapsed() {
    if (!elementRef.current) return; // might be redundant

    // Update state
    state.collapse = COLLAPSED;

    state.style = {
      height: collapseHeight,
      visibility: getCollapsedVisibility(),
    };
    forceUpdate();

    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function setCollapsing() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setCollapsed();
    }

    // Update state
    state.collapse = COLLAPSING;

    state.style = {
      height: getElementHeight(),
      visibility: "",
    };
    forceUpdate();

    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== COLLAPSING) return;

      state.style = {
        height: collapseHeight,
        visibility: "",
      };
      //forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanding() {
    if (!elementRef.current) return; // might be redundant

    if (noAnim) {
      return setExpanded();
    }

    // Updatetate
    state.collapse = EXPANDING;

    nextFrame(() => {
      if (!elementRef.current) return; // might be redundant
      if (state.collapse !== EXPANDING) return;

      state.style = {
        height: getElementHeight(),
        visibility: "",
      };
      // forceUpdate();

      setCallbackTick(Date.now); // callback and re-render
    });
  }

  function setExpanded() {
    if (!elementRef.current) return; // might be redundant

    // Update state
    state.collapse = EXPANDED;

    state.style = {
      height: "",
      visibility: "",
    };
    forceUpdate();

    setTimeout(() => setCallbackTick(Date.now), 0); // callback and re-render
  }

  function getElementHeight() {
    // @ts-ignore
    return `${elementRef.current.scrollHeight}px`;
  }

  function onTransitionEnd({ target, propertyName }) {
    if (target === elementRef.current && propertyName === "height") {
      const styleHeight = target.style.height;

      switch (state.collapse) {
        case EXPANDING:
          if (styleHeight === "" || styleHeight === collapseHeight)
            // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, "ignore setExpanded");
          else setExpanded();
          break;
        case COLLAPSING:
          if (styleHeight === "" || styleHeight !== collapseHeight)
            // This is stale, a newer event has happened before this could execute
            console.warn(`onTransitionEnd height unexpected ${styleHeight}`, "ignore setCollapsed");
          else setCollapsed();
          break;
        default:
          console.warn("Ignored in onTransitionEnd", state.collapse);
      }
    }
  }

  // getDerivedStateFromProps
  const didOpen = state.collapse === EXPANDED || state.collapse === EXPANDING;

  if (!didOpen && isOpen) setExpanding();

  if (didOpen && !isOpen) setCollapsing();
  // END getDerivedStateFromProps

  const overflow = state.collapse === EXPANDED && overflowOnExpanded ? "" : "hidden";

  const computedStyle = {
    overflow,
    transition,
    ...style,
    ...state.style,
  };
  const ElementType = elementType as any;

  const callbackRef = useCallback(
    (node) => {
      if (node) {
        elementRef.current = node;
        onCallback(onInit, { node });
      }
    },
    [elementType],
  );

  const collapseClassName = addState ? `${className} --c-${state.collapse}` : className;

  return (
    <ElementType
      ref={callbackRef}
      style={computedStyle}
      onTransitionEnd={onTransitionEnd}
      className={collapseClassName}
      {...rest}
    >
      {typeof children === "function"
        ? children(state.collapse)
        : typeof render === "function"
        ? render(state.collapse)
        : children}
    </ElementType>
  );
}
