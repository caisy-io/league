import React from "react";
import { IconEmojis } from "../../icons/IconEmojis";
import { LineSelect } from "./LineSelect";
import { LineSelectItem } from "./LineSelectItem";
import { LineSelectLabel } from "./LineSelectILabel";
import styled from "styled-components";

const code = "<Display>Display Text Here</Display>";

const STextWrapper = styled.span`
  width: calc(100% - 30px);
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Default = ({ state, label, required }) => {
  const [selectValue, setSelectValue] = React.useState(null);

  return (
    <>
      <LineSelectLabel errorMessage="Error message" state={state} required={required}>
        {label}
      </LineSelectLabel>
      <LineSelect state={state} value={selectValue} onSelectValue={(e) => setSelectValue(e)}>
        <LineSelectItem value={10}>
          <IconEmojis />
          <STextWrapper>This is a very, very long menu item asdf asdf asdf asdf</STextWrapper>
        </LineSelectItem>
        <LineSelectItem value={20}>
          <IconEmojis />
          Twenty
        </LineSelectItem>
        <LineSelectItem value={30}>
          <IconEmojis />
          Thirty
        </LineSelectItem>
      </LineSelect>
    </>
  );
};

export default {
  title: "Components/Forms/LineSelect",
  component: Default,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["default", "success", "error"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    label: {
      description: "An example boolean argument type",
      control: { type: "text" },
    },
    errorMessage: {
      description: "The error message that's displayed incase of an error",
      control: { type: "text" },
    },
    required: {
      description: "The error message that's displayed incase of an error",
      control: { type: "boolean" },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
        const STextWrapper = styled.span\`
  width: calc(100% - 30px);
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
\`;

export const Default = ({ state, label, required }) => {
  const [selectValue, setSelectValue] = React.useState(null);

  return (
    <>
      <LineSelectLabel errorMessage="Error message" state={state} required={required}>
        {label}
      </LineSelectLabel>
      <LineSelect state={state} value={selectValue} onSelectValue={(e) => setSelectValue(e)}>
        <LineSelectItem value={10}>
          <IconEmojis />
          <STextWrapper>This is a very, very long menu item asdf asdf asdf asdf</STextWrapper>
        </LineSelectItem>
        <LineSelectItem value={20}>
          <IconEmojis />
          Twenty
        </LineSelectItem>
        <LineSelectItem value={30}>
          <IconEmojis />
          Thirty
        </LineSelectItem>
      </LineSelect>
    </>
  );
};
        `
      }
    }
  }
};

Default.args = {
  error: false,
  required: false,
  label: "Label",
  errorMessage: "Error Message",
  state: "default",
};
