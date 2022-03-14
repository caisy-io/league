import React from "react";
import { ViewItem } from "./ViewItem";
import { IconChevronRight } from "../../icons/IconChevronRight";
import { IconEmojis } from "../../icons/IconEmojis";
import { IconCog } from "../../icons/IconCog";
import { IconDragable } from "../../icons/IconDragable";
import { IconButton } from "../icon-button/IconButton";

const Template = () => {
  return (
    <>
      <ViewItem active>
        <div>
          <IconChevronRight size={20}></IconChevronRight>
          <IconEmojis size={16}></IconEmojis>
          <span className="title">Hero</span>
        </div>
        <div>
          <IconButton type="default">
            <IconCog size={16}></IconCog>
          </IconButton>
          <IconButton type="primary" size="small">
            <IconCog size={16}></IconCog>
          </IconButton>
          <IconDragable size={16} />
        </div>
      </ViewItem>
      <ViewItem isChild>
        <div>
          <IconChevronRight size={20}></IconChevronRight>
          <IconEmojis size={16}></IconEmojis>
          Hover
        </div>
        <div>
          <IconCog size={16}></IconCog>
          <IconDragable size={16} />
        </div>
      </ViewItem>
    </>
  );
};

export default {
  title: `Components/ViewItem`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
