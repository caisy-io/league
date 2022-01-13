import React, {useReducer} from "react";
import {DatePickerContext, TDates} from "./DatePickerContext";
import DatePickerReducer from "./DatePickerReducer";
import {SET_ACTIVE, SET_DATE, SET_HOURS, SET_IS_AM, SET_MINUTES, SET_SHOW_HOURS, SET_SHOW_MINUTES} from "./types";

type THourOptions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type TMinutesOptions = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55;

interface IDatePickerProvider {
  onChange?: (payload: TDates) => void;
  initialDate?: TDates;
  onSave?: (payload: TDates) => void;
  onMonthChange?: (payload: Date) => void;
  onCancel?: () => void;
  defaultActive?: boolean;
}

const DatePickerState: React.FC<IDatePickerProvider> = ({...props}) => {
  const initState = {
    hoursOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    minutesOptions: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
    hours: 0,
    minutes: 0,
    isAm: true,
    showHours: false,
    showMinutes: false,
    date: props.initialDate || [new Date()],
    active: props.defaultActive,
  };
  
  const [state, dispatch] = useReducer(DatePickerReducer, initState);
  
  const setHours = (newHours: THourOptions) => {
    dispatch({type: SET_HOURS, payload: newHours});
  };
  
  const setMinutes = (newMinutes: TMinutesOptions) => {
    dispatch({type: SET_MINUTES, payload: newMinutes});
  };
  
  const setIsAm = (value: boolean) => {
    dispatch({type: SET_IS_AM, payload: value});
  };
  
  const setShowHours = (value: boolean) => {
    dispatch({type: SET_SHOW_HOURS, payload: value});
  };
  
  const setShowMinutes = (value: boolean) => {
    dispatch({type: SET_SHOW_MINUTES, payload: value});
  };
  
  const setDate = (newDate: TDates | null) => {
    dispatch({type: SET_DATE, payload: newDate});
  };
  
  const setActive = (value: boolean) => {
    dispatch({type: SET_ACTIVE, payload: value});
  };
  
  const onChange = (date: TDates) => {
    props.onChange?.(date);
  };
  
  const onSave = (date: TDates) => {
    props.onSave?.(date);
    setActive(false);
  };
  const onCancel = () => {
    props.onCancel?.();
  };
  
  return (
    <DatePickerContext.Provider
      value={{
        hoursOptions: state.hoursOptions,
        minutesOptions: state.minutesOptions,
        hours: state.hours,
        minutes: state.minutes,
        setHours,
        setMinutes,
        isAm: state.isAm,
        setIsAm,
        showHours: state.showHours,
        showMinutes: state.showMinutes,
        setShowHours,
        setShowMinutes,
        date: state.date,
        setDate,
        active: state.active,
        setActive,
        onChange,
        onSave,
        onCancel,
      }}
    >
      {props.children}
    </DatePickerContext.Provider>
  );
};

export default DatePickerState;
