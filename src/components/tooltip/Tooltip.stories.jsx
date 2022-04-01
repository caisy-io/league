import React from "react";
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { FlatActionButton } from "../flat-action-button";
import CheckMarkIcon from "./CheckMarkIcon";
import CheckMarkIconFilled from "./CheckMarkIconFilled";

function TooltipDemo({ color, placement, delay, ...args }) {
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
      {args.withIcon && (color === "white" ? <CheckMarkIcon /> : <CheckMarkIconFilled />)}
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
      {args.withButton && (
        <FlatActionButton type={color === "white" ? "default" : "white"}>
          <span style={{ opacity: 0.64 }}>Got it</span>
        </FlatActionButton>
      )}
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
      <Tooltip content={tooltipContent} delay={delay} color={color} placement={placement}>
        <Button>Hover me!</Button>
      </Tooltip>
      <Tooltip content={tooltipContent} delay={delay} color={color} placement={placement}>
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
    delay: {
      description: "Sets a delay for the tooltip",
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
  delay: 0,
};
