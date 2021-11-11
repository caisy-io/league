import React  from "react";
import { Button } from "./Button";
import { IconLink } from "../..";

// Default Button Demo
export default {
  title: "Components/Button",
  component: ButtonDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=5%3A335",
    },
  },
  argTypes: {
    type: {
      description: "Changes the overall design of the button",
      options: ["primary", "secondary", "tertiary", "danger", "neutral", "light", "link", "sidebarTag"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    content: {
      description: "Content of the button",
      control: { type: "text" },
    },
    size: {
      description: "Changes the size of the button",
      options: ["default", "small", "medium"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    activated: {
      description: "Changes the state of the button to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    round: {
      description: "Changes the corners of the button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: "Disables or enables the button",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
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

function ButtonDemo({ content, ...args }) {
  console.log(args)
  return <Button {...args} style={args.type === "sidebarTag" ? {top: "40px", left: "20px"} : {}}>
    {args.type === "sidebarTag" &&
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="40"
        fill="none"
        viewBox="0 0 16 40"
      >
        <g clipPath="url(#clip0_1732:116810)">
          <path
            fill="#fff"
            stroke="#E8EFF3"
            d="M-.5 39.369V.63L9.718 3.035a7.5 7.5 0 015.782 7.301v19.328a7.5 7.5 0 01-5.782 7.3L-.5 39.37z"
          ></path>
          <path
            className="sidebarTag__content__arrow"
            fill="#567A98"
            d="M5.248 20.832a1 1 0 010-1.664l3.197-2.131a1 1 0 011.555.832v4.262a1 1 0 01-1.555.832l-3.197-2.131z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_1732:116810">
            <path fill="#fff" d="M0 0h8a8 8 0 018 8v24a8 8 0 01-8 8H0V0z"></path>
          </clipPath>
        </defs>
      </svg>
    }
    { args.type !== "sidebarTag" && content}
  </Button>;
}

const Template = (args) => <ButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  content: "primary",
  size: "default",
  round: false,
  activated: false,
  disabled: false,
  sticked: false,
  left: true,
  open: true
};

// With Icon
export const WithIcon = ({ content, ...args }) => (
  <Button {...args}>
    <IconLink />
    {content}
  </Button>
);

WithIcon.args = {
  type: "primary",
  content: "Link existing Document",
  size: "default",
  state: "default",
  round: false,
  disabled: false,
  activated: false,
  sticked: false,
};