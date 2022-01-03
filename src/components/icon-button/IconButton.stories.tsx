import React, { useMemo, useState } from "react";
import { IconButton } from "./IconButton";
import { IconStarOutlined } from "../../icons";
import { Badge, EBadgePosition } from "../badge";

export default {
  title: `Components/IconButton`,
  component: IconButtonDemo,
  argTypes: {
    type: {
      description: "Changes the styling of the button",
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      description: "Changes the size of the button",
      options: ["small", "medium", "default"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
};

function IconButtonDemo({ size, type, withBadge }) {
  const [activated, setActivated] = useState(false);
  const iconSize = useMemo(() => {
    switch (size) {
      case "default":
        return 24;
      case "small":
      case "medium":
        return 20;
    }
  }, [size]);

  const handleClick = (newActivatedValue: boolean) => {
    setActivated(newActivatedValue);
  };

  return (
    <>
      {withBadge ? (
        <Badge size="small" type="important" position={EBadgePosition.TopRight} value="1">
          <IconButton onClick={handleClick} activated={activated} size={size} type={type}>
            <IconStarOutlined size={iconSize} />
          </IconButton>
        </Badge>
      ) : (
        <IconButton onClick={handleClick} activated={activated} size={size} type={type}>
          <IconStarOutlined size={iconSize} />
        </IconButton>
      )}
    </>
  );
}

const Template = (args) => <IconButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  size: "default",
  withBadge: false,
};
