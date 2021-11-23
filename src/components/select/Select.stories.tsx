import React  from "react";
import { SelectSingle } from ".";


// Default Select Demo (single select)
export default {
    title: "Components/Select",
    component: SelectDemo,
};

const dataSource = [
    {
      key: "badges",
      label: "Badges",
    },
    {
      key: "button_external_link",
      label: "Button external link",
    },
    {
      key: "button_internal_pages",
      label: "Button internal pages",
    },
];

function SelectDemo(args) {
    const [selectValue, setSelectValue] = React.useState(null);

    return <SelectSingle
        dataSource={dataSource}
        defaultValue="badges"
        value={selectValue}
        onChange={(e) => setSelectValue(e)}
    />
}

const Template = (args) => <SelectDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
