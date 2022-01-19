import {createContext, useContext} from "react";

export type THourOptions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type TMinutesOptions = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55;
export type TDates = [startDate: Date, endDate?: Date];

interface IDatePickerContext {
  hoursOptions: string[];
  minutesOptions: string[];
  hours: number;
  minutes: number;
  setHours: (payload: THourOptions) => void;
  setMinutes: (payload: TMinutesOptions) => void;
  isAm: boolean;
  setIsAm: (payload: boolean) => void;
  showHours: boolean;
  showMinutes: boolean;
  setShowHours: (payload: boolean) => void;
  setShowMinutes: (payload: boolean) => void;
  date: TDates | null;
  setDate: (payload: TDates | null) => void;
  active: boolean;
  setActive: (payload: boolean) => void;
  onChange: (payload: TDates) => void;
  onSave: (payload: TDates) => void;
  onCancel: () => void;
}

const initState = {};

export const DatePickerContext = createContext(initState as IDatePickerContext);

export const usePicker = () => {
  return useContext(DatePickerContext);
};

export default usePicker;
