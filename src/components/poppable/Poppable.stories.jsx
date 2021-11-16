import React, {useCallback, useState} from 'react';
import {Poppable} from 'webrix/components';
// import Poppable from ".";
// import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import {useClickOutside} from "../../utils/hooks";

const TRIANGLE_SIZE = 10;

function PoppableDemo() {
    console.log(` x`, );
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
        backgroundColor: "white",
    };

      const [visible, setVisible] = useState(false);
      const handleOnMouseDownCapture = useClickOutside(() => setVisible(false));
      const [reference, setReference] = useState(new DOMRect(0, 0, 0, 0));
      const getPlacements = useCallback((rbr, tbr) => {
          const {vbefore, vafter, hcenter} = Poppable.Placements;
          return [
              {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top center
              {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom center
          ];
      }, []);
      const handleOnClick = useCallback(e => {
          setVisible(true);
          setReference(new DOMRect(e.clientX, e.clientY, 0, 0));
      }, [setReference, visible]);

      console.log(` visible`, visible);

      return (
        <div style={showcaseStyles}>
           <div style={showcaseInnerStyles}
                onClick={handleOnClick}
                onMouseDownCapture={handleOnMouseDownCapture}
                className='dashed-rectangle'
                title='Clickable Area' />
            {visible && (
                <Poppable reference={reference} placements={getPlacements} className='poppable-target'>
                    <Poppable.Triangle size={TRIANGLE_SIZE}/>
                    <div style={targetStyle}>
                    Target
                    </div>
                </Poppable>
            )}
        </div>
      );
}

export default {
  title: 'Components/Poppable',
  component: PoppableDemo,
};

const Template = (args) => <PoppableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

