import React from "react";
import { Empty } from "../..";

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
  argTypes: {
    type: {
      description: "Changes the layout of the Empty component",
      options: ["grid", "schema"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "schema",
        },
      },
    },
  },
};
const Template = (args) => <EmptyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "grid",
};
