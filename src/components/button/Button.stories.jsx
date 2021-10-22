import React from "react";
import { Button } from "./Button";

export default {
  title: 'Components/Button',
  component: ButtonDemo,
  argTypes: {
    type: {
      description: 'Changes the overall design of the button',
      options: ['primary', 'secondary', 'danger', 'neutral', 'light', 'link'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      }
    },
    content: {
      description: 'Content of the button',
      control: { type: 'text'}
    },
    size: {
      description: 'Changes the size of the button',
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      }
    },
    state: {
      description: 'Changes the state of the button',
      options: ['default', 'hover', 'focus', 'disabled'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'default',
        },
      }
    },
    dashed: {
      description: 'Changes the border of the button',
      control: {type: 'boolean'},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    round: {
      description: 'Changes the corners of the button',
      control: {type: 'boolean'},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    disabled: {
      description: 'Disables or enables the button',
      control: {type: 'boolean'},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    }
  }
};

function ButtonDemo({content, ...args}) {
  return <Button {...args}>{content}</Button>;
}

const Template = (args) => <ButtonDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  content: "primary",
  size: "default",
  state: "default",
  dashed: false,
  round: false,
  disabled: false,
};