import React from "react";
import { Tooltip, Button, IconCheckmark } from "../..";

const checkmarkOutlinedStyles = {
  color: "green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  border: "1px solid green",
  width: "fit-content",
  borderRadius: "50%",
  marginBottom: 8,
};

const checkmarkFilledStyles = {
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  border: "1px solid green",
  width: "fit-content",
  borderRadius: "50%",
  marginBottom: 8,
  backgroundColor: "green",
};

function TooltipDemo({ ...args }) {
  const tooltipContent = (
    <span
      style={{
        width: 175,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <div style={args.color === "white" ? checkmarkOutlinedStyles : checkmarkFilledStyles}>
        <IconCheckmark />
      </div>
      <h1 style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", lineHeight: "20px" }}>A friendly reminder</h1>
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
  title: "Components/Menus & Popovers/Tooltip",
  component: TooltipDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=301%3A4565",
    },
  },
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
