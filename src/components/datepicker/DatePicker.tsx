import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Popover } from "../..";
import DatePickerButtonContainer from "./datepicker-button-container/DatePickerButtonContainer";
import DatePickerCard from "./datepicker-card/DatePickerCard";
import DatePickerInput from "./datepicker-input/DatePickerInput";
import DatePickerTimeSelect from "./datepicker-time-select/DatePickerTimeSelect";
import DatePickerState from "./context/DatePickerState";
import SDatePicker from "./styles/SDatePicker";
import Flatpickr from "react-flatpickr";
import usePicker from "./context/DatePickerContext";
import { SDatePickerCalendarWrapper } from "./styles/SDatePickerCalendarWrapper";
import { DayjsProvider, useDayjs } from "../../provider/DayjsProvider";
import { useClickOutside } from "webrix/hooks";

interface IDatePickerHTMLElement extends HTMLElement {
  dateObj: string;
}

interface IDatePicker {
  initialDate: Date;
  onChange?: (payload: Date) => void;
  onSave?: (payload: Date) => void;
  onMonthChange?: (payload: Date) => void;
  onCancel?: () => void;
  onClickOutside?: () => void;
  onDayCreate?: (dayElem: IDatePickerHTMLElement) => void;
  minDate?: Date | string;
  maxDate?: Date | string;
  config?: IDatePickerConfig;
  i18n?: IDatePickerI18n;
  placeholder?: any;
  children?: any;
  popoverZIndex?: number;
}

export interface IDatePickerConfig {
  withDefaultActive?: boolean;
  withCloseButton?: boolean;
  withSaveButton?: boolean;
  withBottomButtons?: boolean;
  withTime?: boolean;
  withSelectedDisplay?: boolean;
  withQuickSelectionButtons?: boolean;
}
export interface IDatePickerI18n {
  placeholder?: any;
  cancelButtonText?: string;
  saveButtonText?: string;
  today?: string;
  tomorrow?: string;
  nextWeek?: string;
}

const WrappedDatePicker: React.FC<IDatePicker> = ({ config = {}, ...props }) => {
  const {
    setShowMinutes,
    setShowHours,
    setDate,
    getCurrentDate,
    hours,
    minutes,
    active,
    setActive,
    setMinutes,
    setHours,
    setIsAm,
    onChange,
    onSave,
    onCancel,
    isAm,
  } = usePicker();
  const {
    withSelectedDisplay,
    withQuickSelectionButtons,
    withCloseButton,
    withSaveButton,
    withBottomButtons,
    withTime,
    withDefaultActive,
  } = config;

  useEffect(() => {
    setDate(props.initialDate);
  }, [props.initialDate]);

  const dayjs = useDayjs();
  const { locale } = useRouter();
  React.useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);
  const [calendarMonth, setCalendarMonth] = React.useState(dayjs().format("MMMM"));
  const [calendarYear, setCalendarYear] = React.useState(dayjs().format("YYYY"));

  const handleOnClickOutside = React.useCallback(() => {
    if (typeof props.onClickOutside === "function") {
      props.onClickOutside();
    }
    setActive(false);
  }, [setActive]);
  const handleOnMouseDownCapture = useClickOutside(handleOnClickOutside);

  const closeSelectors = () => {
    setShowMinutes(false);
    setShowHours(false);
  };

  const increaseDate = (amount) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + amount);
    setDate(newDate);
    const newDayjs = dayjs(newDate);
    setCalendarMonth(newDayjs.format("MMMM"));
    setCalendarYear(newDayjs.format("YYYY"));
    onChange?.(
      new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), isAm ? hours : hours + 12, minutes),
    );
  };

  const closePicker = () => {
    setDate(props.initialDate);
    setHours(0);
    setMinutes(0);
    setIsAm(true);
    setActive(false);
    onCancel?.();
  };

  const onMonthChange = (currentDate, flatPicker) => {
    const newDate = new Date(flatPicker.currentYear, flatPicker.currentMonth);
    const newDayjsWithoutDays = dayjs(newDate);
    const day = dayjs(currentDate).date();
    const currentDay = day > newDayjsWithoutDays.daysInMonth() ? newDayjsWithoutDays.daysInMonth() : day;
    newDate.setDate(newDate.getDate() + currentDay - 1);
    setDate(newDate);
    setCalendarMonth(newDayjsWithoutDays.format("MMMM"));
    props.onMonthChange?.(newDate);
  };

  const onYearChange = (currentDate, flatPicker) => {
    const newDate = new Date(flatPicker.currentYear, flatPicker.currentMonth, dayjs(currentDate).date());
    setDate(newDate);
    setCalendarYear(dayjs(newDate).format("YYYY"));
  };

  const [loadingRef, setLoadingRef] = React.useState(true);
  React.useEffect(() => {
    setLoadingRef(false);
  }, []);

  const reference = React.useRef(null);

  return (
    <SDatePicker ref={reference} onMouseDownCapture={handleOnMouseDownCapture} onClick={closeSelectors}>
      {withSelectedDisplay && (
        <DatePickerCard>
          <DatePickerInput
            withTime={withTime}
            placeholder={props.i18n?.placeholder ?? "Select a date"}
          ></DatePickerInput>
        </DatePickerCard>
      )}
      {(withDefaultActive || active) && !loadingRef && (
        <Popover zIndex={props.popoverZIndex} reference={reference} placement="bottom" disableTriangle>
          <DatePickerCard>
            {withQuickSelectionButtons && (
              <DatePickerButtonContainer>
                <Button onClick={() => increaseDate(0)} size="small" type="neutral">
                  {props.i18n?.today ?? "Today"}
                </Button>
                <Button onClick={() => increaseDate(1)} size="small" type="neutral">
                  {props.i18n?.tomorrow ?? "Tomorrow"}
                </Button>
                <Button onClick={() => increaseDate(7)} size="small" type="neutral">
                  {props.i18n?.nextWeek ?? "Next Week"}
                </Button>
              </DatePickerButtonContainer>
            )}
            <SDatePickerCalendarWrapper month={calendarMonth} year={calendarYear}>
              <Flatpickr
                value={getCurrentDate()}
                onMonthChange={([currentDate], __, flatPicker) => {
                  onMonthChange(currentDate, flatPicker);
                }}
                onYearChange={([currentDate], __, flatPicker) => {
                  onYearChange(currentDate, flatPicker);
                }}
                onChange={([date]) => {
                  setDate(
                    new Date(date.getFullYear(), date.getMonth(), date.getDate(), isAm ? hours : hours + 12, minutes),
                  );
                  onChange?.(
                    new Date(date.getFullYear(), date.getMonth(), date.getDate(), isAm ? hours : hours + 12, minutes),
                  );
                }}
                onDayCreate={(_, __, ___, data) => props.onDayCreate?.(data)}
                options={{ inline: true, minDate: props.minDate, maxDate: props.maxDate }}
              />
            </SDatePickerCalendarWrapper>
            {getCurrentDate() && (
              <>
                {withTime ? <DatePickerTimeSelect /> : <div style={{ margin: "8px 0px" }}></div>}
                {withBottomButtons && (
                  <DatePickerButtonContainer>
                    {withCloseButton && (
                      <Button onClick={closePicker} type="neutral">
                        {props.i18n?.cancelButtonText ?? "Cancel"}
                      </Button>
                    )}
                    {withSaveButton && (
                      <Button
                        onClick={() => {
                          onSave?.(getCurrentDate());
                        }}
                      >
                        {props.i18n?.saveButtonText ?? "Save"}
                      </Button>
                    )}
                  </DatePickerButtonContainer>
                )}
                {props.children}
              </>
            )}
          </DatePickerCard>
        </Popover>
      )}
    </SDatePicker>
  );
};

export const DatePicker: React.FC<IDatePicker> = ({ ...props }) => {
  const defaultConfig: IDatePickerConfig = {
    withDefaultActive: false,
    withCloseButton: false,
    withSaveButton: false,
    withBottomButtons: false,
    withQuickSelectionButtons: true,
    withSelectedDisplay: true,
    withTime: true,
  };

  const config: IDatePickerConfig = { ...defaultConfig, ...props.config };
  config.withSelectedDisplay || (config.withDefaultActive = true);

  return (
    <DatePickerState {...props} defaultActive={config.withDefaultActive}>
      <DayjsProvider>
        <WrappedDatePicker {...props} config={config}>
          {props.children}
        </WrappedDatePicker>
      </DayjsProvider>
    </DatePickerState>
  );
};
