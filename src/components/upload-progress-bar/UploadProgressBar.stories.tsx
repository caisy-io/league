import React from "react";
import { UploadProgressBar } from './UploadProgressBar';

export default {
  title: `Components/UploadProgressBar`,
  component: UploadProgressBar,
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: "Hello World",
        },
      },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option3"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option2",
        },
      },
    },
  },
};

const UploadProgressBarDemo: React.FC<{ boolean, text, select }> = ({ boolean, text, select }) => (
    <UploadProgressBar>
      <div>boolean value {"=>"} {boolean.toString()}</div>
      <div>text value {"=>"} {text}</div>
      <div>select value {"=>"} {select}</div>
    </UploadProgressBar>
);

export const Default: any = UploadProgressBarDemo.bind({});
Default.args = {
  boolean: true,
  text: 'Hello World',
  select: 'option2',
};
