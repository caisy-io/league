import React from "react";
import {IconCalendar} from "../../../icons";
import usePicker from "../context/DatePickerContext";
import SDatePickerInput from "./styles/SDatePickerInput";
import SDatePickerInputDate from "./styles/SDatePickerInputDate";
import SDatePickerInputDateText from "./styles/SDatePickerInputDateText";
import SIconCalendar from "./styles/SIconCalendar";

interface IDatePickerInput {
  withTime?: boolean;
  withRange?: boolean;
  placeholder?: any;
  weekDays: string[];
  months: string[]
}

const DatePickerInput: React.FC<IDatePickerInput> = ({withRange, withTime, weekDays, months, placeholder}) => {
  const {active, setActive, date, hours, minutes, isAm} = usePicker();
  return (
    <SDatePickerInput active={active || !!date} onClick={() => setActive(!active)}>
      <SDatePickerInputDate rightMarginAuto={!date || !active}>
        <SIconCalendar>
          <IconCalendar/>
        </SIconCalendar>
        {date
          ? (
            <SDatePickerInputDateText>
              {
                date.map?.((el, index) => {
                    if (el) {
                      return date[1] ? (
                        <p key={index}>
                          {`${index ? 'To : ' : 'From : '} ${weekDays[new Date(el).getDay()]}, ${new Date(el).getDate()} ${
                            months[new Date(el).getMonth()]
                          } ${new Date(el).getFullYear()}`}
                        </p>
                      ) : (
                        <p key={index}>
                          {`${weekDays[new Date(el).getDay()]}, ${new Date(el).getDate()} ${
                            months[new Date(el).getMonth()]
                          } ${new Date(el).getFullYear()}`}
                        </p>
                      )
                    }
                  }
                )
              }
            </SDatePickerInputDateText>
          )
          : placeholder}
      </SDatePickerInputDate>
      {date && withTime && !withRange && (
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
