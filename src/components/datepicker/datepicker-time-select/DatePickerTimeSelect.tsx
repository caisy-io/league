import React from "react";
import DatePickerCard from "../datepicker-card/DatePickerCard";
import SDatePickerTimeSelect from "./styles/SDatePickerTimeSelect";
import SDatePickerAMPMIndicator from "./styles/SDatePickerAMPMIndicator";
import SDatePickerTimeIndicator from "./styles/SDatePickerTimeIndicator";
import DatePickerTimePicker from "./DatePickerTimePicker";
import usePicker from "../context/DatePickerContext";

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
    currentDate,
    onChange,
    getCurrentDate,
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
    const date = getCurrentDate();
    const newHours = isAmNewValue ? hours : hours + 12;
    const newMinutes = minutes;
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), newHours, newMinutes);
    onChange(newDate);
  };

  return (
    <SDatePickerTimeSelect>
      <DatePickerCard flexDirection="row">
        <SDatePickerTimeIndicator onClick={openHours}>
          <DatePickerTimePicker value="hours" show={showHours} options={hoursOptions} />
          {hours?.toString().length === 1 ? `0${hours}` : `${hours}`}
        </SDatePickerTimeIndicator>
        :
        <SDatePickerTimeIndicator onClick={openMinutes}>
          <DatePickerTimePicker value="minutes" show={showMinutes} options={minutesOptions} />
          {minutes?.toString().length === 1 ? `0${minutes}` : `${minutes}`}
        </SDatePickerTimeIndicator>
      </DatePickerCard>
      <DatePickerCard flexDirection="row">
        <SDatePickerAMPMIndicator onClick={() => onAmPmClick(true)} active={isAm}>
          AM
        </SDatePickerAMPMIndicator>
        <SDatePickerAMPMIndicator onClick={() => onAmPmClick(false)} active={!isAm}>
          PM
        </SDatePickerAMPMIndicator>
      </DatePickerCard>
    </SDatePickerTimeSelect>
  );
};

export default DatePickerTimeSelect;
