import { SET_HOURS, SET_MINUTES, SET_SHOW_HOURS, SET_SHOW_MINUTES, SET_IS_AM, SET_DATE, SET_ACTIVE } from "./types";

const DatePickerReducer = (state, action) => {
  switch (action.type) {
    case SET_HOURS:
      return { ...state, hours: action.payload };
    case SET_MINUTES:
      return { ...state, minutes: action.payload };
    case SET_SHOW_HOURS:
      return { ...state, showHours: action.payload };
    case SET_SHOW_MINUTES:
      return { ...state, showMinutes: action.payload };
    case SET_IS_AM:
      return { ...state, isAm: action.payload };
    case SET_DATE:
      return { ...state, date: action.payload };
    case SET_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

export default DatePickerReducer;
