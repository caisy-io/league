import { TableHeader } from "./TableHeader";
import { TableHeaderButton } from "./TableHeaderButton";
import { IconDotsHorizontal } from "../..";
import { useState } from "react";

function TableHeaderDemo({ children }) {
  return <TableHeader>{children}</TableHeader>;
}

export default {
  title: "Components/Table/TableHeader",
  component: TableHeaderDemo,
};

const ColumnHeaderTemplate = ({ locked, sorted }) => {
  const [activated, setActivated] = useState(false);

  return (
    <TableHeaderDemo>
      <span style={{ padding: "12px 8px" }}>
        <TableHeaderButton
          onClick={() => setActivated((prev) => !prev)}
          locked={locked}
          sorted={sorted}
          activated={activated}
        >
          COLUMN
        </TableHeaderButton>
      </span>
    </TableHeaderDemo>
  );
};

export const ColumnHeader = ColumnHeaderTemplate.bind({});
ColumnHeader.args = {
  locked: false,
  sorted: false,
};

const IconSectionTemplate = (args) => (
  <TableHeaderDemo {...args}>
    <span
      style={{
        padding: "14px 16px",
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconDotsHorizontal size={20} />
    </span>
  </TableHeaderDemo>
);

export const IconSection = IconSectionTemplate.bind({});
IconSection.args = {};
