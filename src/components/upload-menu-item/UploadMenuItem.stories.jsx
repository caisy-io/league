import React from "react";
import { UploadMenuItem } from "./UploadMenuItem";

export const Default = ({ state, percentageLoaded, itemCount }) => {
  return (<UploadMenuItem state={state} percentageLoaded={percentageLoaded} itemCount={itemCount}>
    {(state == "default" || state == "dragging") && "Upload"}
    {state == "loading" && (percentageLoaded ? `${percentageLoaded}%` : "Loading...")}
    {state == "success" && "Done"}
  </UploadMenuItem>
  )
};

export default {
  title: "Components/Navigation/UploadMenuItem",
  component: Default,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1054%3A16321",
    },
  },
  argTypes: {
    state: {
      description: "Changes the state of the Item",
      control: { type: "select" },
      options: ["default", "dragging", "loading", "success"],
    },
    percentageLoaded: {
      description: "Shows percentage",
      control: { type: "number" },
    },
    itemCount: {
      description: "itemCount",
      control: { type: "number" },
    },
  },
};

Default.args = {
  state: "default",
  percentageLoaded: 0,
  itemCount: 1,
};
