import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Resizable } from '../resizable';
import { useResize } from '../resizable/Resizable.hooks';
import { lock, max, min, resize, update } from '../resizable/Resizable.operations';
import { Left, Right } from '../resizable/Resizable.resizers';
import { SLayoutSiderContent } from './styles/SLayoutSiderContent';
import { SResizableWrapper } from '../resizable/styles/SResizableWrapper';
import useWindowDimensions from '../../utils/hooks/WindowDimensionsHook';

interface ILayoutSiderSize {
  width: number;
  height: number;
  left: number;
  top: number;
}
interface ILayoutSider {
  left?: boolean;
  children?: React.ReactElement;
  onSizeChanged?: (size: ILayoutSiderSize) => void;
}

// TODO Optimize values
const minWidth = 150;
const minHeight = 450;

export const initialSize = { 
  width: minWidth, 
  height: minHeight,
  left: 0, 
  top: 0 
};

export const LayoutSider: React.FC<ILayoutSider> = ({ left = true, ...props }) => {
  const sider = useRef<any>();
  const [size, setSize] = useState({ width: 0, height: 0, left: 0, top: 0 });

  const setSizeHandler = (size: ILayoutSiderSize) => {
    setSize(size);
    props.onSizeChanged && props.onSizeChanged(size);
  };

  const { width } = useWindowDimensions(); 

  const maxWidth = width * 0.4;
  const maxHeight = 850; // TODO Change?

  const rProps = useResize(useMemo(() => [
    resize(sider),
    min(minWidth, minHeight),
    max(maxWidth, maxHeight), 
    lock(),
    update(setSizeHandler),
], [sider]));

  useEffect(() => {
    if(sider.current) setSize(initialSize);
  }, [sider.current, left]);

  // Important note: Webrix always looks at position of resizer with regard to left. Thus: our left in props is exactly the opposite of Webrix left
  return (
    <SResizableWrapper 
      style={{ backgroundColor:'violet' }}  
      ref={sider} 
      width={size.width + 'px'} 
      height={'100%'} left={!left}
    > 
      {sider.current &&
        <Resizable {...rProps}>
          {!left && <Left/>}
          {left && <Right/>}
        </Resizable>
      }
      <SLayoutSiderContent>
        {props.children}
      </SLayoutSiderContent>
  </SResizableWrapper>
);
};