import React, { useState } from "react";
import { BlueprintEditorSubnav } from "./BlueprintEditorSubnav";

// Default BlueprintEditorSubnav Demo
export default {
  title: "Components/Navigation/BlueprintEditorSubnav",
  component: BlueprintEditorSubnavDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=835%3A14612",
    },
  },
  argTypes: {},
};

function BlueprintEditorSubnavDemo({ configBadgeValue }) {
  const [groups, setGroups] = useState([
    {
      name: "Main",
    },
    {
      name: "Group 2",
    },
  ]);
  const [selectedGroup, setSelectedGroup] = useState("Main");
  const onSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const onGroupAdd = () => {
    const newGroups = groups.slice();
    const newGroup = { name: window.prompt("Enter group's name", "") };
    if (newGroup.name) {
      newGroups.push(newGroup);
      setGroups(newGroups);
    }
  };

  const onEditGroup = ({ name }) => {
    const editedGroup = groups.find((group) => group.name === name);
    if (editedGroup) {
      const newName = window.prompt("Enter new name", `${name}`);
      const newGroups = groups.slice();
      const groupIndex = newGroups.findIndex((group) => group.name === name);
      newGroups[groupIndex] = { name: newName };
      setGroups(newGroups);
    }
  };

  return (
    <BlueprintEditorSubnav
      configBadgeValue={configBadgeValue}
      onGroupAdd={onGroupAdd}
      onSelectGroup={onSelectGroup}
      selectedGroup={selectedGroup}
      groups={groups}
      onEditGroup={onEditGroup}
    />
  );
}

const Template = (args) => <BlueprintEditorSubnavDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  configBadgeValue: "1",
};
