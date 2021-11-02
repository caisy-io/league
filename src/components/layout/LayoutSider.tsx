import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Resizable } from '../resizable';
import { useResize } from '../resizable/Resizable.hooks';
import { contain, lock, max, min, resize, update } from '../resizable/Resizable.operations';
import { SLayoutSider } from "./styles/SLayoutSider";
import { Left, Right } from '../resizable/Resizable.resizers';

interface ILayoutSider {
  left?: boolean;
  right?: boolean;
  children?: React.ReactElement;
}

export const LayoutSider: React.FC<ILayoutSider> = ({ left = false, right = false, ...props }) => {
  // TODO Optimize values
  const minWidth = 1920 * 0.07 + 100;
  const maxWidth = 1920 * 0.5 + 200;
  const minHeight = 450;
  const maxHeight = 800;

  // TODO Optimize values
  const initialSize = { 
    width: minWidth + (maxWidth - minWidth) / 2, 
    height: minHeight,
    left: 0, 
    top: 0 
  };

  const sider = useRef<any>();
  const [size, setSize] = useState({ width: 0, height: 0, left: 0, top: 0 });

  const rProps = useResize(useMemo(() => [
    resize(sider),
    min(minWidth, minHeight),
    max(maxWidth, maxHeight), 
    lock(),
    update(setSize),
], [sider]));

  useEffect(() => {
    if(sider.current) setSize(initialSize);
  }, [sider.current]);

  console.log(size);

  return (
      <SLayoutSider ref={sider} style={{ width: size.width, height: size.height}}> 
        <div style={{ width: '100%', height: '100%' }}> {/* TODO Refactor: Create and use SLayoutSiderContent */}
          {sider.current && 
            <Resizable {...rProps}>
              {left && <Left/>}
              {right && <Right/>}
            </Resizable>
          }
          {props.children}
        </div>
      </SLayoutSider>
    );
};