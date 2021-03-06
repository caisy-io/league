import React, { useEffect, useMemo, useRef, useState } from "react";
import { useResize } from "./Resizable.hooks";
import { Left, Right } from "./Resizable.resizers";
import { Resizable } from "./Resizable";
import { lock, max, min, resize, update } from "./Resizable.operations";
import { SResizableWrapper } from "./styles/SResizableWrapper";

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
    },[resizable.current, args.left])

    return (
        <div 
            style={{
                backgroundColor:'white', 
                display: 'flex',
                flexDirection: args.left ? 'row' : 'row-reverse'
            }}>
            <SResizableWrapper
                ref={resizable}
                width={size.width + 'px'}
                height={size.height + 'px'}
                style={{ 
                    borderRadius: '6px',
                    backgroundColor:'lightblue'
                }} 
            >
                {resizable.current &&
                    <Resizable {...props}> 
                        {!args.left && <Left/>}
                        {args.left && <Right/>}
                    </Resizable>
                }
                <div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white', 
                        width: '100%', 
                        height: '100%'
                    }}
                >
                    {args.content}
                </div>
            </SResizableWrapper>
        </div>
    );
}

export default {
  title: 'Components/Utilities/Resizable',
  component: ResizableDemo,
  argTypes: {
    content: {
      description: 'Content of the button',
      control: { type: 'text'}
    },
    left: {
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
    left: true,
    content: "Resize Me!",
};