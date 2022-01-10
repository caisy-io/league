import React, {useState} from "react";
import {Img} from "../../base-components";
import {DatePicker} from "./DatePicker";

// Default Date Picker Demo
export default {
  title: "Components/DatePicker",
  component: DatePickerDemo,
  argTypes: {
    active: {
      description: "Changes the state of the component to active",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    range: {
      description: "Select a range of dates using the range calendar",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    time :{
      description: "Select time",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    quickSelectionButtons:{
      description: "Show quick selection buttons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    bottomButtons:{
      description: "Show bottom buttons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    closeButton:{
      description: "Show close button. you must enable bottomButtons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    saveButton:{
      description: "Show save button. you must enable bottomButtons",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      }
    },
    selectedDisplay:{
      description: "Show input to handle visibility of date picker.",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: true,
        },
      }
    }
  },
}

function DatePickerDemo(args) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const onSave = (dateToSave) => console.log(dateToSave);
  const onCancel = () => {
    console.log("canceled");
  };
  const onMonthChange = (newDate) => console.log(newDate);
  
  return <DatePicker
    initialDate={yesterday}
    // onCancel={onCancel}
    onMonthChange={(newDate) => onMonthChange(newDate.toISOString())}
    // onSave={(dateToSave) => onSave(dateToSave.toISOString())}
    onChange={(date) => console.log(date.toISOString())}
    onDayCreate={(dayElem) => {
      if (Math.random() > 0.2) return;
      dayElem.classList.add("has-badge");
      // dayElem.dataset.badgeContent = (Math.random() * 100).toFixed(0);
    }}
    config={{
      withDefaultActive: args.active,
      withRange: args.range,
      withTime: args.time,
      withSelectedDisplay: args.selectedDisplay,
      withCloseButton: args.closeButton,
      withSaveButton: args.saveButton,
      withBottomButtons: args.bottomButtons,
      withQuickSelectionButtons: args.quickSelectionButtons,
    }}
  />;
}

const Template = (args) => <DatePickerDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  range: false,
  time:false,
  quickSelectionButtons:false,
  bottomButtons: false,
  closeButton: false,
  saveButton: false,
  selectedDisplay: true
};
