import React, { useEffect, useMemo, useRef, useState } from "react";
import { Left, Resizable, Right, useResize } from ".";
import { Layout } from "../layout/Layout";
import { SLayoutSider } from "../layout/styles/SLayoutSider";
import { SLayoutSiderContent } from "../layout/styles/SLayoutSiderContent";
import { lock, max, min, resize, update } from "./Resizable.operations";

    // TODO Optimize values
const MIN_WIDTH = 1920 * 0.07 + 100;
const MAX_WIDTH = 1920 * 0.5 + 200;
const MIN_HEIGHT = 450;
const MAX_HEIGHT = 800;

function ResizableDemo(args) {
    // TODO Optimize values
    const initialSize = { 
        width: MIN_WIDTH + (MAX_WIDTH - MIN_WIDTH) / 2, 
        height: MIN_HEIGHT,
        left: 0, 
        top: 0 
    };

    const [size, setSize] = useState({ width: 0, height: 0, left: 0, top: 0 });
    const resizable = useRef();
    const props = useResize(useMemo(() => [
        resize(resizable),
        min(MIN_WIDTH, MIN_HEIGHT),
        max(MAX_WIDTH, MAX_HEIGHT), 
        lock(),
        update(setSize),
    ], [resizable]));
    
    useEffect(() => {
        if(resizable.current) setSize(initialSize);
    },[resizable.current])

    return ( // TODO dont to left/right with booleans
        <div style={{backgroundColor:'white'}}>
            <SLayoutSider style={{ width: size.width, height: size.height, backgroundColor:'lightblue'}} ref={resizable}>
                <SLayoutSiderContent style={{color: 'white'}}>
                    {resizable.current &&
                        <Resizable {...props}> 
                            {args.left && !args.right && <Left/>}
                            {!args.left && args.right && <Right/>}
                        </Resizable>
                    }
                    {args.content}
                </SLayoutSiderContent>
            </SLayoutSider>
        </div>
    );
}

export default {
  title: 'Components/Resizable',
  component: ResizableDemo,
  argTypes: {
    content: {
      description: 'Content of the button',
      control: { type: 'text'}
    },
    right: {
        description: 'Resizable on the right side',
        control: {type: 'boolean'},
        table: {
          defaultValue: {
            summary: true,
          },
        }
      },
  }
};
const Template = (args) => <ResizableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    right: true,
    content: "Resize Me!",
};