import React, { useMemo, useState, useRef } from 'react';
import {  useMove } from "./Movable.hooks";
import { Movable } from "./Movable";
import { move, update } from './Movable.operations';

function MovableDemo() {
    const ref = useRef();
    const [position, setPosition] = useState({top: 50, left: 50});
    const props = useMove(useMemo(() => [
        move(ref),
        update(setPosition),
    ], []));

    const positionTop =  position.top - 16; // Fixes some weird behaviour 
    const positionLeft = position.left - 16; // Movable item jumped when clicking on it

    return (
        <div style={{position: 'relative'}}>
            <Movable 
                {...props} 
                ref={ref} 
                style={{
                    top: positionTop, 
                    left: positionLeft, 
                    backgroundColor:'mediumvioletred', 
                    color: 'white', 
                    width: 'fit-content', 
                    padding: '20px', 
                    borderRadius: '10px'
                }}>
                Move Me!
            </Movable>
        </div>
    );
}

export default {
  title: 'Components/Utilities/Movable',
  component: MovableDemo,
};
const Template = (args) => <MovableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
