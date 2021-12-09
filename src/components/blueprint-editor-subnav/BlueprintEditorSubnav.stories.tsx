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

  return (
    <BlueprintEditorSubnav
      configBadgeValue={configBadgeValue}
      onGroupAdd={onGroupAdd}
      onSelectGroup={onSelectGroup}
      selectedGroup={selectedGroup}
      groups={groups}
    />
  );
}

const Template = (args) => <BlueprintEditorSubnavDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  configBadgeValue: "1",
};
