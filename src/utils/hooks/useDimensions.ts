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

import { useState, useRef, useEffect } from "react";
import { readResizeObserverEntry } from "../rect";

export const useDimensions = (ref) => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const observer = useRef(
    new ResizeObserver((entries) => {
      setDimensions(readResizeObserverEntry(entries[0]));
    }),
  );
  useEffect(() => {
    const { current: obs } = observer;
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return dimensions;
};
