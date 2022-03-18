import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Popover } from "../popover";
import { Scrollbar } from "../scrollbar";
import DatePickerButtonContainer from "./datepicker-button-container/DatePickerButtonContainer";
import DatePickerCard from "./datepicker-card/DatePickerCard";
import DatePickerInput from "./datepicker-input/DatePickerInput";
import DatePickerTimeSelect from "./datepicker-time-select/DatePickerTimeSelect";
import DatePickerState from "./context/DatePickerState";
import SDatePicker from "./styles/SDatePicker";
import Flatpickr from "react-flatpickr";
import usePicker, { TDates, THourOptions, TMinutesOptions } from "./context/DatePickerContext";
import { SDatePickerCalendarWrapper } from "./styles/SDatePickerCalendarWrapper";
import SDatePickerContainer from "./styles/SDatePickerContainer";
import { SDatePickerCurrentTime } from "./styles/SDatePickerCurrentTime";
import SDatePickerMenuContainer from "./styles/SDatePickerMenuContainer";
import SDatePickerMenuItem from "./styles/SDatePickerMenuItem";
import SDatePickerMonthContainer from "./styles/SDatePickerMonthContainer";
import { SDatePickerButton } from "./styles/SDatePickerButton";
import { SDatePickerMonthAndYear } from "./styles/SDatePickerMonthAndYear";
import { SDatePickerWrapperHeader } from "./styles/SDatePickerWrapperHeader";
import { DayjsProvider, useDayjs } from "../../provider/DayjsProvider";
import { useClickOutside } from "../../utils";
import { IconAngleDown, IconCalendar, IconClock, IconChevronLeft, IconChevronRight } from "../../icons";
import localeData from "dayjs/plugin/localeData";
import SDatePickerYearContainer from "./styles/SDatePickerYearContainer";

dayjs.extend(localeData);

interface IDatePickerHTMLElement extends HTMLElement {
  dateObj: string;
}

interface IDatePicker {
  initialDate?: TDates;
  value?: TDates;
  onChange?: (payload: TDates) => void;
  onSave?: (payload: TDates) => void;
  onMonthChange?: (payload: Date) => void;
  onCancel?: () => void;
  onClickOutside?: () => void;
  onDayCreate?: (dayElem: IDatePickerHTMLElement) => void;
  minDate?: Date | string;
  maxDate?: Date | string;
  i18n?: IDatePickerI18n;
  locale?: string;
  children?: any;
  popoverZIndex?: number;
  withDefaultActive?: boolean;
  withCloseButton?: boolean;
  withSaveButton?: boolean;
  withBottomButtons?: boolean;
  withTime?: boolean;
  withSelectedDisplay?: boolean;
  withQuickSelectionButtons?: boolean;
  withRange?: boolean;
  withoutMonthsNavigation?: boolean;
  inline?: boolean;
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

const WrappedDatePicker: React.FC<IDatePicker> = ({
  withDefaultActive,
  withCloseButton,
  withSaveButton,
  withBottomButtons,
  withTime,
  withSelectedDisplay,
  withQuickSelectionButtons,
  withoutMonthsNavigation,
  withRange,
  locale = "en",
  initialDate,
  onClickOutside,
  onMonthChange,
  popoverZIndex,
  i18n,
  onDayCreate,
  minDate,
  maxDate,
  children,
  inline,
  value,
}) => {
  const {
    setShowMinutes,
    setShowHours,
    setDate,
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
    date,
  } = usePicker();

  const [isRange, setIsRange] = useState(withRange);
  useEffect(() => {
    date?.filter(Boolean).length === 2 && setIsRange(true);
  }, []);

  const dayjs = useDayjs();
  dayjs.locale(locale);

  const [calendarMonth, setCalendarMonth] = React.useState(dayjs(date[0]).format("MMMM"));
  const [calendarYear, setCalendarYear] = React.useState(dayjs(date[0]).format("YYYY"));

  const handleOnClickOutside = React.useCallback(() => {
    if (typeof onClickOutside === "function") {
      onClickOutside();
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
    setDate([
      new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), isAm ? hours : hours + 12, minutes),
    ]);
    const newDayjs = dayjs(newDate);
    setCalendarMonth(newDayjs.format("MMMM"));
    setCalendarYear(newDayjs.format("YYYY"));
    onChange?.([
      new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), isAm ? hours : hours + 12, minutes),
    ]);
  };

  const closePicker = () => {
    setDate(initialDate || [new Date()]);
    setHours(0);
    setMinutes(0);
    setIsAm(true);
    setActive(false);
    onCancel?.();
  };

  const onMonthChanged = (flatPicker) => {
    const newDate = new Date(flatPicker.currentYear, flatPicker.currentMonth);
    const newDayjsWithoutDays = dayjs(newDate);
    setCalendarMonth(newDayjsWithoutDays.format("MMMM"));
    onMonthChange?.(newDate);
  };

  const onYearChange = (currentDate, flatPicker) => {
    const newDate = new Date(flatPicker.currentYear, flatPicker.currentMonth, dayjs(currentDate).date());
    setCalendarYear(dayjs(newDate).format("YYYY"));
  };

  const [loadingRef, setLoadingRef] = React.useState(true);
  React.useEffect(() => {
    setLoadingRef(false);
  }, []);

  React.useEffect(() => {
    if (value) {
      setDate(value);
      if (value?.filter((el) => el).length) {
        setCalendarMonth(dayjs(value[0]).format("MMMM"));
        setCalendarYear(dayjs(value[0]).format("YYYY"));
      } else {
        setCalendarMonth(dayjs(new Date()).format("MMMM"));
        setCalendarYear(dayjs(new Date()).format("YYYY"));
      }
    }
  }, [value]);

  const getCurrentTime = () => {
    const date = new Date();
    setHours(+date.getHours() >= 12 ? ((+date.getHours() - 12) as THourOptions) : (+date.getHours() as THourOptions));
    setMinutes((Math.round(+date.getMinutes() / 5) * 5) as TMinutesOptions);
    setIsAm(+date.getHours() < 12);
    const currentDate = date;
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      date.getHours(),
      date.getMinutes(),
    );
    setDate([newDate]);
    onChange?.([newDate]);
  };
  const reference = React.useRef(null);
  const flatRef = React.useRef<Flatpickr>();
  const monthRefContainer = React.useRef<HTMLDivElement>(null);
  const yearRefContainer = React.useRef<HTMLDivElement>(null);

  const [showMonthMenu, setShowMonthMenu] = React.useState(false);
  const [showYearMenu, setShowYearMenu] = React.useState(false);

  const clickOutsideMenuMonth = useClickOutside((e) => {
    !monthRefContainer.current?.contains(e.target) && setShowMonthMenu(false);
  });
  const clickOutsideMenuYear = useClickOutside((e) => {
    !yearRefContainer.current?.contains(e.target) && setShowYearMenu(false);
  });

  const DatePickerContainer = !loadingRef && (
    <SDatePickerContainer withoutMonthsNavigation={withoutMonthsNavigation}>
      <SDatePickerCalendarWrapper withoutMonthsNavigation={withoutMonthsNavigation}>
        <SDatePickerWrapperHeader withoutMonthsNavigation={withoutMonthsNavigation}>
          {!withoutMonthsNavigation && (
            <IconButton
              size="small"
              type="secondary"
              onClick={() => {
                const currentMonth = (flatRef.current as Flatpickr)?.flatpickr?.currentMonth;
                (flatRef.current as Flatpickr)?.flatpickr?.jumpToDate(
                  dayjs(new Date(+calendarYear, currentMonth))
                    .subtract(1, "month")
                    .valueOf(),
                  true,
                );
              }}
            >
              <IconChevronLeft size={20} />
            </IconButton>
          )}
          <SDatePickerMonthAndYear>
            <SDatePickerMonthContainer ref={monthRefContainer}>
              <SDatePickerButton
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMonthMenu(!showMonthMenu);
                }}
              >
                {calendarMonth}
                <IconAngleDown />
              </SDatePickerButton>
              {showMonthMenu && (
                <SDatePickerMenuContainer onMouseDownCapture={clickOutsideMenuMonth}>
                  <Scrollbar>
                    {dayjs.months().map((month, index) => (
                      <SDatePickerMenuItem
                        key={month}
                        onClick={() => {
                          (flatRef.current as Flatpickr)?.flatpickr?.changeMonth(index, false);
                          setShowMonthMenu(false);
                        }}
                      >
                        {month}
                      </SDatePickerMenuItem>
                    ))}
                  </Scrollbar>
                </SDatePickerMenuContainer>
              )}
            </SDatePickerMonthContainer>
            <SDatePickerYearContainer ref={yearRefContainer}>
              <SDatePickerButton
                onClick={() => {
                  setShowYearMenu(!showYearMenu);
                }}
              >
                {calendarYear}
                <IconAngleDown />
              </SDatePickerButton>
              {showYearMenu && (
                <SDatePickerMenuContainer onMouseDownCapture={clickOutsideMenuYear}>
                  <Scrollbar>
                    {[...new Array(16)].map((_, index) => {
                      const year = dayjs()
                        .add(-5 + index, "year")
                        .year();
                      return (
                        <SDatePickerMenuItem
                          key={year}
                          onClick={() => {
                            (flatRef.current as Flatpickr)?.flatpickr?.changeYear(year);
                            setShowYearMenu(false);
                          }}
                        >
                          {year}
                        </SDatePickerMenuItem>
                      );
                    })}
                  </Scrollbar>
                </SDatePickerMenuContainer>
              )}
            </SDatePickerYearContainer>
          </SDatePickerMonthAndYear>
          {!withoutMonthsNavigation && (
            <IconButton
              size="small"
              type="secondary"
              onClick={() => {
                const currentMonth = (flatRef.current as Flatpickr)?.flatpickr?.currentMonth;
                (flatRef.current as Flatpickr)?.flatpickr?.jumpToDate(
                  dayjs(new Date(+calendarYear, currentMonth))
                    .add(1, "month")
                    .valueOf(),
                  true,
                );
              }}
            >
              <IconChevronRight size={20} />
            </IconButton>
          )}
        </SDatePickerWrapperHeader>
        <Flatpickr
          ref={flatRef as any}
          value={date as Date[]}
          onMonthChange={(_, __, flatPicker) => {
            onMonthChanged(flatPicker);
          }}
          onYearChange={([currentDate], __, flatPicker) => {
            onYearChange(currentDate, flatPicker);
          }}
          onChange={([startDate, endDate]) => {
            const dateStart = new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate(),
              isAm ? hours : hours + 12,
              minutes,
            );
            const dates: TDates = endDate
              ? [
                  dateStart,
                  new Date(
                    endDate.getFullYear(),
                    endDate.getMonth(),
                    endDate.getDate(),
                    isAm ? hours : hours + 12,
                    minutes,
                  ),
                ]
              : [dateStart];
            setDate(dates);
            onChange?.(dates);
          }}
          onDayCreate={(_, __, ___, data) => onDayCreate?.(data)}
          options={{
            inline: true,
            minDate: minDate,
            maxDate: maxDate,
            mode: `${withRange && isRange ? "range" : "single"}`,
            locale: {
              firstDayOfWeek: 1,
              weekdays: {
                shorthand: dayjs.weekdaysMin(),
                longhand: dayjs.weekdaysMin(),
              },
            },
          }}
        />
      </SDatePickerCalendarWrapper>
      {withQuickSelectionButtons && (
        <DatePickerButtonContainer>
          <Button onClick={() => increaseDate(0)}>
            <IconCalendar />
            {i18n?.today ?? "Today"}
          </Button>
        </DatePickerButtonContainer>
      )}
      {date && (
        <>
          {withTime && !withRange && !isRange && (
            <>
              <DatePickerTimeSelect />
              {withQuickSelectionButtons && (
                <SDatePickerCurrentTime>
                  <Button onClick={getCurrentTime}>
                    <IconClock />
                    {i18n?.currentTime ?? "current Time"}
                  </Button>
                </SDatePickerCurrentTime>
              )}
            </>
          )}
          {withBottomButtons && (
            <DatePickerButtonContainer>
              {withCloseButton && <Button onClick={closePicker}>{i18n?.cancelButtonText ?? "Cancel"}</Button>}
              {withSaveButton && (
                <Button
                  onClick={() => {
                    onSave?.(date);
                  }}
                >
                  {i18n?.saveButtonText ?? "Save"}
                </Button>
              )}
            </DatePickerButtonContainer>
          )}
          {children}
        </>
      )}
    </SDatePickerContainer>
  );
  return (
    <SDatePicker ref={reference} onMouseDownCapture={handleOnMouseDownCapture} onClick={closeSelectors}>
      {withSelectedDisplay && !inline && (
        <DatePickerCard>
          <DatePickerInput
            withTime={withTime}
            withRange={isRange && withRange}
            weekDays={dayjs.weekdays()}
            months={dayjs.months()}
            placeholder={i18n?.placeholder ?? "Select a date"}
          />
        </DatePickerCard>
      )}
      {inline && DatePickerContainer}
      {(withDefaultActive || active) && !inline && (
        <Popover zIndex={popoverZIndex} reference={reference} placement="top" disableTriangle>
          {DatePickerContainer}
        </Popover>
      )}
    </SDatePicker>
  );
};

export const DatePicker: React.FC<IDatePicker> = ({ ...props }) => {
  props.withSelectedDisplay || (props.withDefaultActive = true);

  return (
    <DatePickerState {...props} defaultActive={props.withDefaultActive}>
      <DayjsProvider>
        <WrappedDatePicker {...props}>{props.children}</WrappedDatePicker>
      </DayjsProvider>
    </DatePickerState>
  );
};
