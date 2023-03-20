import React from "react";
import DatePickerCard from "../datepicker-card/DatePickerCard";
import usePicker from "../context/DatePickerContext";
import SDatePickerTimePicker from "./styles/SDatePickerTimePicker";
import SDatePickerTimePickerOption from "./styles/SDatePickerTimePickerOption";
import { ClickOutside } from "../../../utils";

interface IDatePickerTimePicker {
  value: string;
  options: string[];
  show: boolean;
  onClickOutside: () => void;
}

const DatePickerTimePicker: React.FC<IDatePickerTimePicker> = ({ ...props }) => {
  const { setHours, setMinutes, setShowHours, setShowMinutes, onChange, date, hours, minutes } = usePicker();

  const setTime = (e, value) => {
    e.stopPropagation();
    switch (props.value) {
      case "minutes":
        setMinutes(value);
        setShowHours(false);
        setShowMinutes(false);
        date && onChange([new Date(date[0].getFullYear(), date[0].getMonth(), date[0].getDate(), hours, value)]);
        return;
      case "hours":
        setHours(value);
        setShowHours(false);
        setShowMinutes(false);
        date && onChange([new Date(date[0].getFullYear(), date[0].getMonth(), date[0].getDate(), value, minutes)]);
        return;
    }
  };

  return (
    <>
      {props.show && (
        <ClickOutside onClickOutside={props.onClickOutside}>
          <SDatePickerTimePicker
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              props.onClickOutside();
            }}
          >
            <DatePickerCard>
              {props.options.map((option) => (
                <SDatePickerTimePickerOption onClick={(e) => setTime(e, option)} key={option}>
                  {option.toString().length === 1 ? `0${option}` : `${option}`}
                </SDatePickerTimePickerOption>
              ))}
            </DatePickerCard>
          </SDatePickerTimePicker>
        </ClickOutside>
      )}
    </>
  );
};

export default DatePickerTimePicker;
