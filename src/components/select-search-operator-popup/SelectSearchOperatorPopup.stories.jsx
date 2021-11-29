import React, { useEffect, useState } from "react";
import { SelectSearchOperatorPopup } from "./SelectSearchOperatorPopup";

export default {
  title: `Components/SelectSearchOperatorPopup`,
  component: SelectSearchOperatorPopupDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1489%3A17768",
    },
  },
  argTypes: {},
};

// Field card
function SelectSearchOperatorPopupDemo({ ...args }) {
  const [selected, setSelected] = useState(args.selected);

  useEffect(() => {
    setSelected(args.selected);
  }, [args.selected]);

  return <SelectSearchOperatorPopup onSelect={(op) => setSelected(op)} {...args} selected={selected} />;
}

// Template card
export const Default = ({ ...args }) => <SelectSearchOperatorPopupDemo {...args} />;

Default.args = {
  operators: ["And", "Or", "Equals"],
  selected: "",
};
