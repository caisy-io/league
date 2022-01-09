import React  from "react";
import { DatePicker } from "./DatePicker";

// Default Date Picker Demo
export default {
    title: "Components/DatePicker",
    component: DatePickerDemo,
};

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
            withDefaultActive: true,
            withSelectedDisplay: true,
            withTime: true,
            withCloseButton: false,
            withSaveButton: false,
            withBottomButtons: true,
            withQuickSelectionButtons: true,
        }}
        />;
}

const Template = (args) => <DatePickerDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};