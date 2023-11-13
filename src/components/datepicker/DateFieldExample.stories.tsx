import React from "react";
import { DatePicker } from "./DatePicker";

const Template = ({}) => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div>
      <pre>{value.toDateString()}</pre>
      <h1>DatePicker</h1>
      <DatePicker
        initialDate={[new Date()]}
        value={[value as any]}
        inline={true}
        withSelectedDisplay={false}
        onChange={(value) => {
          console.log(` value`, value);
          onChange(value[0]);
        }}
        withTime={false}
        withCloseButton={false}
        withSaveButton={false}
        withBottomButtons={false}
        withQuickSelectionButtons={false}
        withoutMonthsNavigation={true}
      />
    </div>
  );
};

// Default Date Picker Demo
export default {
  title: "Components/DatePicker/DateFieldExample",
  component: Template,
};

export const Default = Template.bind({});
