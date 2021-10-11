import React from "react";
import { IconCalendar } from "../../../icons/IconCalendar";
import usePicker from "../context/DatePickerContext";
import SDatePickerInput from "./styles/SDatePickerInput";
import SDatePickerInputDate from "./styles/SDatePickerInputDate";
import SIconCalendar from "./styles/SIconCalendar";

interface IDatePickerInput {
  withTime?: boolean;
  placeholder?: any;
}

const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePickerInput: React.FC<IDatePickerInput> = ({ ...props }) => {
  const { active, setActive, date, hours, minutes, isAm, getCurrentDate } = usePicker();
  return (
    <SDatePickerInput active={active || !!date} onClick={() => setActive(!active)}>
      <SDatePickerInputDate rightMarginAuto={!getCurrentDate() || !active}>
        <SIconCalendar>
          <IconCalendar />
        </SIconCalendar>
        {getCurrentDate()
          ? `${WeekDays[new Date(getCurrentDate()).getDay()]}, ${new Date(getCurrentDate()).getDate()} ${
              Months[new Date(getCurrentDate()).getMonth()]
            } ${new Date(getCurrentDate()).getFullYear()} `
          : props.placeholder}
      </SDatePickerInputDate>
      {date && props.withTime && (
        <SDatePickerInputDate leftMarginAuto>
          {`${hours.toString().length === 1 ? `0${hours}` : hours}:${
            minutes.toString().length === 1 ? `0${minutes}` : minutes
          } ${isAm ? "AM" : "PM"}`}
        </SDatePickerInputDate>
      )}
    </SDatePickerInput>
  );
};

export default DatePickerInput;
