import { KeyActionSnackbar } from "./KeyActionSnackbar";

function KeyActionSnackbarDemo({ ...args }) {
  return <KeyActionSnackbar {...args} />;
}

export default {
  title: "Components/Snackbar/KeyActionSnackbar",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=441%3A6203",
    },
  },
  component: KeyActionSnackbarDemo,
};
const Template = (args) => <KeyActionSnackbarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  keys: ["A"],
  action: "action",
};

export const WithTwoKeys = Template.bind({});
WithTwoKeys.args = {
  keys: ["Ctrl", "C"],
  action: "copy",
};
