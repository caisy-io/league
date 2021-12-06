import React, { useEffect }  from "react";
import { SidebarTag } from "./SidebarTag";

// Default SidebarTag Demo
export default {
  title: "Components/SidebarTag",
  component: SiderbarTagDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=5%3A335",
    },
  },
  argTypes: {
    left: {
      description: "Position of the siderbar tag",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    open: {
      description: "Defines whether siderbar is open",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
  },
};

function SiderbarTagDemo({ ...args }) {
    useEffect(() => {
        console.log("update")
    }, [args.left, args.open])

  return <SidebarTag {...args} left={args.left} open={args.open} style={{top: "40px", left: "20px"}}/>;
}

const Template = (args) => <SiderbarTagDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  left: true,
  open: true
};