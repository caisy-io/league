import React, {useEffect} from "react";
import {IconClock} from "../../icons";
import {Button} from "../button/Button";
import {Popover} from "../popover/Popover";
import DatePickerButtonContainer from "./datepicker-button-container/DatePickerButtonContainer";
import DatePickerCard from "./datepicker-card/DatePickerCard";
import DatePickerInput from "./datepicker-input/DatePickerInput";
import DatePickerTimeSelect from "./datepicker-time-select/DatePickerTimeSelect";
import DatePickerState from "./context/DatePickerState";
import SDatePicker from "./styles/SDatePicker";
import Flatpickr from "react-flatpickr";
import usePicker, {THourOptions, TMinutesOptions} from "./context/DatePickerContext";
import {SDatePickerCalendarWrapper} from "./styles/SDatePickerCalendarWrapper";
import SDatePickerContainer from "./styles/SDatePickerContainer";
import {SDatePickerNavigationButton} from "./styles/SDatePickerNavigationButton";
import {SDatePickerButton} from "./styles/SDatePickerButton";
import {SDatePickerMonthAndYear} from "./styles/SDatePickerMonthAndYear";
import {SDatePickerWrapperHeader} from "./styles/SDatePickerWrapperHeader";
import {DayjsProvider, useDayjs} from "../../provider/DayjsProvider";
import {useClickOutside} from "../../utils";
import {IconAngleLeft} from "../../icons/IconAngleLeft";
import {IconAngleRight} from "../../icons/IconAngleRight";
import {IconAngleDown} from "../../icons/IconAngleDown";
import {IconCalendar} from "../../icons/IconCalendar";

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
  locale?: string;
  range?: boolean;
}

export interface IDatePickerConfig {
  withDefaultActive?: boolean;
  withCloseButton?: boolean;
  withSaveButton?: boolean;
  withBottomButtons?: boolean;
  withTime?: boolean;
  withSelectedDisplay?: boolean;
  withQuickSelectionButtons?: boolean;
  withRange: boolean
}

export interface IDatePickerI18n {
  placeholder?: any;
  cancelButtonText?: string;
  saveButtonText?: string;
  today?: string;
  tomorrow?: string;
  nextWeek?: string;
  currentTime?: string;
}

const WrappedDatePicker: React.FC<IDatePicker> = ({config = {}, locale = "en", ...props}) => {
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
    withRange
  } = config;
  
  useEffect(() => {
    setDate(props.initialDate);
  }, [props.initialDate]);
  
  const dayjs = useDayjs();
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
          />
        </DatePickerCard>
      )}
      {(withDefaultActive || active) && !loadingRef && (
        <Popover zIndex={props.popoverZIndex} reference={reference} placement="top" disableTriangle>
          <SDatePickerContainer>
            <SDatePickerCalendarWrapper>
              <SDatePickerWrapperHeader>
                <SDatePickerNavigationButton>
                  <IconAngleLeft/>
                </SDatePickerNavigationButton>
                <SDatePickerMonthAndYear>
                  <SDatePickerButton onClick={() => {
                    console.log("TODO design missing")
                  }}>
                    {calendarMonth}
                    <IconAngleDown/>
                  </SDatePickerButton>
                  <SDatePickerButton onClick={() => {
                    console.log("TODO design missing")
                  }}>
                    {calendarYear}
                    <IconAngleDown/>
                  </SDatePickerButton>
                </SDatePickerMonthAndYear>
                <SDatePickerNavigationButton>
                  <IconAngleRight/>
                </SDatePickerNavigationButton>
              </SDatePickerWrapperHeader>
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
                options={{
                  inline: true, minDate: props.minDate, maxDate: props.maxDate, mode: `${withRange ? "range" : "single"}`,
                  locale: {
                    firstDayOfWeek: 1,
                    weekdays: {
                      shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    }
                  }
                }}
              />
            </SDatePickerCalendarWrapper>
            {withQuickSelectionButtons && (
              <DatePickerButtonContainer>
                <Button onClick={() => increaseDate(0)}>
                  <IconCalendar/>
                  {props.i18n?.today ?? "Today"}
                </Button>
              </DatePickerButtonContainer>
            )}
            {getCurrentDate() && (
              <>
                {withTime && (
                  <>
                    <DatePickerTimeSelect/>
                    {withQuickSelectionButtons && (
                      <DatePickerButtonContainer>
                        <Button onClick={() => {
                          const date = new Date();
                          setHours(+date.getHours() >= 12 ? (+date.getHours() - 12 as THourOptions) : (+date.getHours() as THourOptions));
                          setMinutes(Math.ceil(+date.getMinutes() / 5) * 5 as TMinutesOptions);
                          setIsAm(+date.getHours() < 12);
                          const currentDate = getCurrentDate();
                          const newDate = new Date(currentDate.getFullYear(),
                            currentDate.getMonth(), currentDate.getDate(), date.getHours(), date.getMinutes());
                          onChange(newDate);
                        }}>
                          <IconClock/>
                          {props.i18n?.currentTime ?? "current Time"}
                        </Button>
                      </DatePickerButtonContainer>
                    )}
                  </>
                )}
                {withBottomButtons && (
                  <DatePickerButtonContainer>
                    {withCloseButton && (
                      <Button onClick={closePicker}>{props.i18n?.cancelButtonText ?? "Cancel"}</Button>
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
          </SDatePickerContainer>
        </Popover>
      )}
    </SDatePicker>
  );
};

export const DatePicker: React.FC<IDatePicker> = ({...props}) => {
  const defaultConfig: IDatePickerConfig = {
    withDefaultActive: false,
    withCloseButton: false,
    withSaveButton: false,
    withBottomButtons: false,
    withQuickSelectionButtons: true,
    withSelectedDisplay: true,
    withTime: true,
  };
  
  const config: IDatePickerConfig = {...defaultConfig, ...props.config};
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
{/*`${range ? "range" : "single"}`*/
}
