import React from "react";
import { Tooltip, Button } from "../..";

function TooltipDemo({ ...args }) {
  const tooltipContent = (
    <span
      style={{
        width: 175,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <h1 style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}>A friendly reminder</h1>
      <p
        style={{
          fontSize: 12,
          lineHeight: "16px",
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        You can save your search view and come back to it later just in one click
      </p>
    </span>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 32,
        height: "70vh",
      }}
    >
      <Tooltip content={tooltipContent} {...args}>
        <Button>Hover me!</Button>
      </Tooltip>
    </div>
  );
}

export default {
  title: "Components/Tooltip",
  component: TooltipDemo,
  argTypes: {
    color: {
      description: "Changes the color of the Tooltip",
      options: ["white", "black"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "white",
        },
      },
    },
    placement: {
      description: "Changes the placement of the Tooltip",
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "top",
        },
      },
    },
  },
};
const Template = (args) => <TooltipDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "white",
  placement: "top",
};
