import React, { useRef, useState } from "react";
import { Popover } from "./Popover";

export default {
  title: `Components/Utilities/Popover`,
  component: PopoverDemo,
  parameters: {},
};

function PopoverDemo({ content, ...args }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getPlacements = (rbr) => {
    return [
      { top: 100, left: 0 },
      { top: 100, left: 100 },
      { top: 0, left: 100 },
      { top: -100, left: 100 },
      { top: -100, left: 0 },
      { top: -100, left: -100 },
      { top: 0, left: -100 },
      { top: 100, left: -100 },
    ].map(({ top, left }) => ({ top: top + rbr.top, left: left + rbr.left }));
  };
  return (
    <>
      <div style={{ userSelect: "none" }} onClick={() => setVisible((prev) => !prev)} ref={ref}>
        Trigger
      </div>

      <Popover display={visible} reference={ref as any} placement="bottom">
        <div>Popover</div>
      </Popover>
    </>
  );
}

const Template = (args) => <PopoverDemo {...args} />;

export const Default = Template.bind({});
