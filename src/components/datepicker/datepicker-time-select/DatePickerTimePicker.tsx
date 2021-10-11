import React from "react";
import DatePickerCard from "../datepicker-card/DatePickerCard";
import usePicker from "../context/DatePickerContext";
import SDatePickerTimePicker from "./styles/SDatePickerTimePicker";
import SDatePickerTimePickerOption from "./styles/SDatePickerTimePickerOption";

interface IDatePickerTimePicker {
  value: string;
  options: string[];
  show: boolean;
}

const DatePickerTimePicker: React.FC<IDatePickerTimePicker> = ({ ...props }) => {
  const { setHours, setMinutes, setShowHours, setShowMinutes, onChange, getCurrentDate, hours, minutes } = usePicker();

  const setTime = (e, value) => {
    e.stopPropagation();
    switch (props.value) {
      case "minutes":
        setMinutes(value);
        setShowHours(false);
        setShowMinutes(false);
        onChange(
          new Date(
            getCurrentDate().getFullYear(),
            getCurrentDate().getMonth(),
            getCurrentDate().getDate(),
            hours,
            value,
          ),
        );
        return;
      case "hours":
        setHours(value);
        setShowHours(false);
        setShowMinutes(false);
        onChange(
          new Date(
            getCurrentDate().getFullYear(),
            getCurrentDate().getMonth(),
            getCurrentDate().getDate(),
            value,
            minutes,
          ),
        );
        return;
    }
  };

  return (
    <>
      {props.show && (
        <SDatePickerTimePicker>
          <DatePickerCard>
            {props.options.map((option) => (
              <SDatePickerTimePickerOption onClick={(e) => setTime(e, option)} key={option}>
                {option.toString().length === 1 ? `0${option}` : `${option}`}
              </SDatePickerTimePickerOption>
            ))}
          </DatePickerCard>
        </SDatePickerTimePicker>
      )}
    </>
  );
};

export default DatePickerTimePicker;
