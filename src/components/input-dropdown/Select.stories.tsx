import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { SimpleInputDropdown } from "./SimpleInputDropdown";
import { ClickOutside, useDimensions } from "../../utils";

export default {
  title: "Components/Forms/SimpleInputDropdown",
  component: SimpleInputDropdownDemo,
  argTypes: {
    label: {
      description: "Label/ title for the dropdown",
      control: { type: "text" },
    },
    required: {
      description: "Changes the input to required",
      control: { type: "boolean" },
    },
    error: {
      description: "Changes the status to error",
      control: { type: "boolean" },
    },
    translationBadge: {
      description: "Toggles the existence of the translation badge",
      control: { type: "boolean" },
    },
  },
};

const dataSource = [
  {
    key: "title_label",
    title: "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
  },
  {
    key: "icon_title",
    title: "Title and Icon - Wow! I am veeeeeery long indeed!",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
  {
    key: "icon_title_label",
    title: "Label, Title and Icon - Wow! I am veeeeeery long indeed!",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
];

function SimpleInputDropdownDemo({ error, required, translationBadge, label }) {
  const [selectValue, setSelectValue] = React.useState(null);
  const [rotationDegrees, setRotationDegrees] = React.useState(0);

/*   const onChange = (e) => {
    onSelectValue?.(e);
    setSelectTitle(dataSource.find((option) => option.key === e)?.title);
    setSelectIcon(dataSource.find((option) => option.key === e)?.icon);
    setOpened(false);
    setRotationDegrees(0);
  }; */

  const handleDropdown = () => {
    if (opened == true) {
      setRotationDegrees(0)
    } else {
      setRotationDegrees(-180)
    }
    setOpened((prev) => !prev)
  };



  return <div style={{ display: "flex" }}>
    <ClickOutside onClickOutside={() => handleDropdown()}>
      <SimpleInputDropdown
        error={error}
        required={required}
        translationBadge={translationBadge}
        dataSource={dataSource}
        placeholder="Select an option.."
        value={selectValue}
        onSelectValue={(e) => setSelectValue(e)}
        label={label}
        onClick={() => handleDropdown()}
      />
    </ClickOutside>
    <SimpleInputDropdown
      error={error}
      required={required}
      translationBadge={translationBadge}
      dataSource={dataSource}
      placeholder="Select an option.."
      value={selectValue}
      onSelectValue={(e) => setSelectValue(e)}
      label={label}
    /></div>
}

const Template = (args) => <SimpleInputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  translationBadge: false,
  label: "Default label"
};

export const Required = Template.bind({});
Required.args = {
  error: false,
  required: true,
  translationBadge: false,
  label: "Default label"
};

export const Translation = Template.bind({});
Translation.args = {
  error: false,
  required: false,
  translationBadge: true,
  label: "Default label"
};