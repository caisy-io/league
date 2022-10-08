import React from "react";
import { SSelectSearchOperatorDropdown } from "./styles/SSelectSearchOperatorDropdown";
import {SearchBarOperatorBadgeSelect} from "../search-bar-operator-badge-select"
// Template card
export const Default = ({ ...args }) => {
  return (
    <SSelectSearchOperatorDropdown>
      {args?.operators?.map((op) => (
        <SearchBarOperatorBadgeSelect selected={args?.selected == op} onClick={() => {}}>{op}</SearchBarOperatorBadgeSelect>
      ))}
    </SSelectSearchOperatorDropdown>
  );
};

export default {
  title: `Components/SelectSearchOperatorPopup`,
  component: Default,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1489%3A17768",
    },
  },
  argTypes: {},
};

Default.args = {
  operators: ["And", "Or", "Equals"],
  selected: "",
};
