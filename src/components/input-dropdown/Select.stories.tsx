import React  from "react";
import { SelectSingle} from "./SelectSingle";

export default {
    title: "Components/Forms/Select",
    component: SelectDemo,
};

const dataSource = [
    {
      key: "badges",
      title: "Default",
      label: "Label"
    },
    {
      key: "button_external_link",
      title: "Button external link",
    },
    {
      key: "button_internal_pages",
      title: "Button internal pages",
    },
];

function SelectDemo(args) {
    const [selectValue, setSelectValue] = React.useState(null);
    return <SelectSingle
        dataSource={dataSource}
        placeholder="Select an option.."
        value={selectValue}
        onChange={(e) => setSelectValue(e)}
    />
}

const Template = (args) => <SelectDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};