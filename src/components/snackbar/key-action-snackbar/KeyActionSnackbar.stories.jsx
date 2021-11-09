import { KeyActionSnackbar } from "./KeyActionSnackbar";

function KeyActionSnackbarDemo({ ...args }) {
  return <KeyActionSnackbar {...args} />;
}

export default {
  title: "Components/Snackbar/KeyActionSnackbar",
  component: KeyActionSnackbarDemo,
};
const Template = (args) => <KeyActionSnackbarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  keys: ["Ctrl", "C"],
  action: "copy",
};
