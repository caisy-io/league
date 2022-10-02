import React from "react";
import { Empty } from "../empty";

function EmptyDemo({ ...args }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Empty {...args} />
    </div>
  );
}

export default {
  title: "Components/Empty",
  component: EmptyDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=651%3A9238",
    },
  },
  argTypes: {
    type: {
      description: "Changes the layout of the Empty component",
      options: ["grid", "blueprint", "tableSkeleton"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "grid",
        },
      },
    },
  },
};
const Template = (args) => <EmptyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "grid",
  title: "No results for your request",
  description: "Try to use different search request",
};
