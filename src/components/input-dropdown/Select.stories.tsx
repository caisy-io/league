import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { ClickOutside } from "../../utils";
import { SimpleInputDropdown } from "./SimpleInputDropdown";

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
  const [firstRotationDegrees, setFirstRotationDegrees] = React.useState(0);
  const [secondRotationDegrees, seSecondRotationDegrees] = React.useState(0);

  const [firstOpened, setFirstOpened] = React.useState(false);
  const [secondOpened, setSecondOpened] = React.useState(false);

  const handleFirstDropdown = () => {
    if (firstOpened == true) {
      setFirstRotationDegrees(0)
    } else {
      setFirstRotationDegrees(-180)
    }
    setFirstOpened((prev) => !prev)
  };

  const handleSecondDropdown = () => {
    if (secondOpened == true) {
      seSecondRotationDegrees(0)
    } else {
      seSecondRotationDegrees(-180)
    }
    setSecondOpened((prev) => !prev)
  };

  const onSelectValue = (e) => {
    setSelectValue(e)
    if (firstOpened == true) {
      setFirstOpened((prev) => !prev)
      setFirstRotationDegrees(0)
    }
    if (secondOpened == true) {
      setSecondOpened((prev) => !prev)
      seSecondRotationDegrees(0)
    }
  };

  return <div style={{ display: "flex" }}>
    <ClickOutside onClickOutside={console.log("hi")}>
      <SimpleInputDropdown
        error={error}
        required={required}
        translationBadge={translationBadge}
        dataSource={dataSource}
        placeholder="Select an option.."
        value={selectValue}
        onSelectValue={(e) => onSelectValue(e)}
        label={label}
        opened={firstOpened}
        rotationDegrees={firstRotationDegrees}
        onClick={() => handleFirstDropdown()}
      />
    </ClickOutside>
    <ClickOutside onClickOutside={console.log("hi")}>
      <SimpleInputDropdown
        error={error}
        required={required}
        translationBadge={translationBadge}
        dataSource={dataSource}
        placeholder="Select an option.."
        value={selectValue}
        onSelectValue={(e) => onSelectValue(e)}
        label={label}
        opened={secondOpened}
        rotationDegrees={secondRotationDegrees}
        onClick={() => handleSecondDropdown()}
      />
    </ClickOutside>
  </div>
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