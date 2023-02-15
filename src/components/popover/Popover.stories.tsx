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

  return (
    <div style={{ flex: 1, display: "flex", height: "calc(100vh - 40px)" }}>
      <div
        style={{ userSelect: "none", width: "fit-content", margin: "auto" }}
        onClick={() => setVisible((prev) => !prev)}
        ref={ref}
      >
        Trigger
      </div>

      <Popover disableAnimation={false} display={visible} reference={ref as any} placement="bottom">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            width: 200,
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "var(--box-shadow-strong-pop-elavation)",
          }}
        >
          Popover
        </div>
      </Popover>
    </div>
  );
}

const Template = (args) => <PopoverDemo {...args} />;

export const Default = Template.bind({});
