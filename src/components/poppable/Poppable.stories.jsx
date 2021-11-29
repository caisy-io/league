import React, { useCallback, useState } from 'react';
import Poppable from ".";
import {useClickOutside, useVisibilityState} from "../..";
import { Triangle } from "./components/triangle/Triangle";
import { SPoppableWrapper } from "./styles/SPoppableWrapper"
import { vbefore, vafter, hcenter } from "./Poppable.placements";

const TRIANGLE_SIZE = 10;

function PoppableDemo() {
    const showcaseStyles = {
        margin: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      };

    const showcaseInnerStyles = {
        width: "600px",
        height: "400px",
        backgroundColor: "#D7BE82",
        cursor: "pointer"
      };

    const targetStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
    };

    const {visible, show, hide} = useVisibilityState();
      const handleOnMouseDownCapture = useClickOutside(hide);
      const [reference, setReference] = useState(new DOMRect(0, 0, 0, 0));
      const getPlacements = useCallback((rbr, tbr) => {
          return [
              {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top center
              {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom center
          ];
      }, []);

      const handleOnClick = useCallback(e => {
          show();
          setReference(new DOMRect(e.clientX, e.clientY, 0, 0));
      }, [setReference, visible]);

      return (
          <SPoppableWrapper style={showcaseStyles}>
              <div style={showcaseInnerStyles}
                    onClick={handleOnClick}
                    onMouseDownCapture={handleOnMouseDownCapture}
                    className='dashed-rectangle'
                    title='Clickable Area' />
                {visible && (
                    <Poppable reference={reference} placements={getPlacements} className='poppable-target'>
                        <Triangle size={TRIANGLE_SIZE}/>
                        <div style={targetStyle}>
                          Target
                        </div>
                    </Poppable>
                )}
          </SPoppableWrapper>
      );
}

export default {
  title: 'Components/Poppable',
  component: PoppableDemo,
};

const Template = (args) => <PoppableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

