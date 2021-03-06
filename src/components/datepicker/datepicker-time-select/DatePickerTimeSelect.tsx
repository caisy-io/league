import React from "react";
import SDatePickerTimeSelect from "./styles/SDatePickerTimeSelect";
import SDatePickerAMPMIndicator from "./styles/SDatePickerAMPMIndicator";
import SDatePickerTimeIndicator from "./styles/SDatePickerTimeIndicator";
import DatePickerTimePicker from "./DatePickerTimePicker";
import usePicker from "../context/DatePickerContext";
import SDatePickerTimePickerWrapper from "./styles/SDatePickerTimePickerWrapper";
import { IconClock } from "../../../icons";
import { ClickOutside } from "../../../utils";

interface IDatePickerTimeSelect {}

const DatePickerTimeSelect: React.FC<IDatePickerTimeSelect> = () => {
  const {
    isAm,
    setIsAm,
    hours,
    minutes,
    showHours,
    showMinutes,
    setShowHours,
    setShowMinutes,
    minutesOptions,
    hoursOptions,
    onChange,
    date,
  } = usePicker();

  const openHours = (e) => {
    e.stopPropagation();
    setShowHours(true);
    setShowMinutes(false);
  };

  const openMinutes = (e) => {
    e.stopPropagation();
    setShowMinutes(true);
    setShowHours(false);
  };

  const onAmPmClick = (isAmNewValue: boolean) => {
    setIsAm(isAmNewValue);
    const newHours = isAmNewValue ? hours : hours + 12;
    const newMinutes = minutes;
    const newDate =
      date && new Date(date[0].getFullYear(), date[0].getMonth(), date[0].getDate(), newHours, newMinutes);
    newDate && onChange([newDate]);
  };

  return (
    <SDatePickerTimeSelect>
      <SDatePickerTimePickerWrapper>
        <IconClock />
        <SDatePickerTimeIndicator onClick={openHours}>
          <DatePickerTimePicker
            onClickOutside={() => setShowHours(false)}
            value="hours"
            show={showHours}
            options={hoursOptions}
          />
          {hours?.toString().length === 1 ? `${hours}` : `${hours}`}
        </SDatePickerTimeIndicator>
        <SDatePickerTimeIndicator>:</SDatePickerTimeIndicator>
        <SDatePickerTimeIndicator onClick={openMinutes}>
          <DatePickerTimePicker
            onClickOutside={() => setShowMinutes(false)}
            value="minutes"
            show={showMinutes}
            options={minutesOptions}
          />
          {minutes?.toString().length === 1 ? `0${minutes}` : `${minutes}`}
        </SDatePickerTimeIndicator>
      </SDatePickerTimePickerWrapper>
      <SDatePickerTimePickerWrapper>
        <SDatePickerAMPMIndicator onClick={() => onAmPmClick(true)} active={isAm}>
          AM
        </SDatePickerAMPMIndicator>
        <SDatePickerAMPMIndicator onClick={() => onAmPmClick(false)} active={!isAm}>
          PM
        </SDatePickerAMPMIndicator>
      </SDatePickerTimePickerWrapper>
    </SDatePickerTimeSelect>
  );
};

export default DatePickerTimeSelect;
