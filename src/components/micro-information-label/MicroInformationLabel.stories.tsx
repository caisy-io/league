import React from "react";
import { MicroInformationLabel } from './MicroInformationLabel';

export default {
  title: `Components/MicroInformationLabel`,
  component: MicroInformationLabel,
  argTypes: {
    text: {
      description: "An example text argument type",
      control: { type: "text" },
      table: {
        defaultValue: {
          summary: "Hello World",
        },
      },
    },
  },
};

const MicroInformationLabelDemo: React.FC<{ boolean, text, select }> = ({ boolean, text, select }) => (
    <MicroInformationLabel>
      <div>text value {"=>"} {text}</div>
    </MicroInformationLabel>
);

export const Default: any = MicroInformationLabelDemo.bind({});
Default.args = {
  boolean: true,
  text: 'Hello World',
  select: 'option2',
};
