import React from "react";
import { Tooltip, Button, IconCheckmark, FlatActionButton } from "../..";

const checkmarkOutlinedStyles = {
  color: "#41C300",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  border: "1px solid #41C300",
  borderRadius: "50%",
  marginBottom: 8,
  height: 16,
  width: 16,
};

const checkmarkFilledStyles = {
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  border: "1px solid #41C300",
  borderRadius: "50%",
  marginBottom: 8,
  backgroundColor: "#41C300",
  height: 16,
  width: 16,
};

function TooltipDemo({ color, placement, ...args }) {
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
      {args.withIcon && (
        <div style={color === "white" ? checkmarkOutlinedStyles : checkmarkFilledStyles}>
          <IconCheckmark />
        </div>
      )}
      <h1 style={{ fontSize: 14, fontWeight: 600, textAlign: "center", lineHeight: "20px" }}>{args.title}</h1>
      <p
        style={{
          fontSize: 12,
          lineHeight: "16px",
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        {args.description}
      </p>
      {args.withButton && <FlatActionButton type={color === "white" ? "default" : "white"}>Got it</FlatActionButton>}
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
      <Tooltip content={tooltipContent} color={color} placement={placement}>
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
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "topRight",
        "topLeft",
        "bottomRight",
        "bottomLeft",
        "leftTop",
        "leftBottom",
        "rightTop",
        "rightBottom",
      ],
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
  title: "A friendly reminder",
  description: "You can save your search view and come back to it later just in one click",
  withIcon: true,
  withButton: true,
};
