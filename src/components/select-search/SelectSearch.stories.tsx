import React  from "react";
import { SelectSingleSearch} from "./SelectSingleSearch";
import { SelectMultipleSearch} from "./SelectMultipleSearch";


// Default Select Single Search Demo 
export default {
    title: "Components/SelectSearch",
    component: SelectSearchDemo,
};


function SelectSearchDemo(args) {
  const [categories, setCategories] = React.useState([
    {
      label: "Searching:",
      key: "Searching",
      active: false,
      selected: false,
      visible: true,
      items: [
        {
          key: "Badges",
          label: "Badges",
          visible: true,
          data: { customLabel: "Custom Render 1" },
        },
        {
          key: "Button external link",
          label: "Button external link",
          visible: true,
          data: { customLabel: "Custom Render 2" },
        },
        {
          key: "Button internal pages",
          label: "Button internal pages",
          visible: true,
          data: { customLabel: "Custom Render 3" },
        },
      ],
    },
  ]);

  return <SelectSingleSearch
    placeholder={"Select a release..."}
    dataSource={categories}
    setDataSource={setCategories}
    onChange={(e) => console.log(e)}
    renderItem={(option) => (
      <div>
        {option.data.customLabel} {option.label}
      </div>
    )}
  />;
}

const Template = (args) => <SelectSearchDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Select multiple search demo
export const MultipleSelectSearch = (args) => {
  const [categories, setCategories] = React.useState([
    {
      label: "Searching:",
      key: "Searching",
      active: false,
      selected: false,
      visible: true,
      items: [
        {
          key: "Badges",
          label: "Badges",
          visible: true,
          data: { customLabel: "Custom Render 1" },
        },
        {
          key: "Button external link",
          label: "Button external link",
          visible: true,
          data: { customLabel: "Custom Render 2" },
        },
        {
          key: "Button internal pages",
          label: "Button internal pages",
          visible: true,
          data: { customLabel: "Custom Render 3" },
        },
      ],
    },
  ]);

  return <SelectMultipleSearch
    placeholder={"Select a release..."}
    dataSource={categories}
    setDataSource={setCategories}
    onChange={(e) => console.log(e)}
  />
};

MultipleSelectSearch.args = {};