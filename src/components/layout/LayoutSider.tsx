import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Resizable } from '../resizable';
import { useResize } from '../resizable/Resizable.hooks';
import { lock, max, min, resize, update } from '../resizable/Resizable.operations';
import { SLayoutSider } from "./styles/SLayoutSider";
import { Left, Right } from '../resizable/Resizable.resizers';

// interface ILayoutSider {}

export const LayoutSider = ({ ...props }) => {//: React.FC<ILayoutSider>
  const sider = useRef<any>();
  const [siderLoaded, setSiderLoaded] = useState(false);
  const [manual, setManual] = useState(false);
  const rProps = useResize(useMemo(() => [
    resize(sider),
    min(180, 180),
    max(300, 300),
    lock(),
    update(setManual),
], [sider.current]));

  useEffect(() => {
    if(sider.current) setSiderLoaded(true);
  }, [sider.current]);

  return (
    <SLayoutSider>
      <div ref={sider}>
        {sider.current && 
          <Resizable {...rProps}>
          {props.left && <Left/>}
          {props.right && <Right/>}
        </Resizable>
        }
        {props.children}
      </div>
    </SLayoutSider>);
};