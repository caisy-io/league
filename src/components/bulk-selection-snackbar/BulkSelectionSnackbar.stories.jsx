import React from "react";
import { BulkSelectionSnackbar } from "./BulkSelectionSnackbar";
import { BulkSelectionSnackbarAction } from "./BulkSelectionSnackbarAction";
import { IconPublish, IconTrashDelete } from "../..";

function BulkSelectionSnackbarDemo({ ...args }) {
  const handlePublic = () => {
    console.log("Publishing...");
  };
  const handleDelete = () => {
    console.log("Deleting...");
  };

  return (
    <BulkSelectionSnackbar {...args}>
      <BulkSelectionSnackbarAction onClick={handlePublic}>
        <IconPublish />
        Publish
      </BulkSelectionSnackbarAction>
      <BulkSelectionSnackbarAction onClick={handleDelete}>
        <IconTrashDelete />
        Delete
      </BulkSelectionSnackbarAction>
    </BulkSelectionSnackbar>
  );
}

export default {
  title: "Components/BulkSelectionSnackbar",
  component: BulkSelectionSnackbarDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=139%3A1916",
    },
  },
};
const Template = (args) => <BulkSelectionSnackbarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedItems: 2,
};
