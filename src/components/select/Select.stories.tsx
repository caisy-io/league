import React  from "react";
import { SelectMultiple} from "./SelectMultiple";
import { SelectSingle} from "./SelectSingle";


// Default Select Demo (single select)
export default {
    title: "Components/Legacy/Select",
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

// Select multiple demo
export const MultipleSelect = (args) => {
    const [multipleSelectValue, setMultipleSelectValue] = React.useState([]);

    return <SelectMultiple
        dataSource={dataSource}
        value={multipleSelectValue}
        placeholder="Select multiple options!"
        onChange={(e) => setMultipleSelectValue(e)}
    />
};

MultipleSelect.args = {};