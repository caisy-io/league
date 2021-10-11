import React from "react";
import { SDatePickerButtonContainer } from "./styles/SDatePickerButtonContainer";

interface IDatePickerButtonContainer {}

const DatePickerButtonContainer: React.FC<IDatePickerButtonContainer> = ({ ...props }) => {
  return <SDatePickerButtonContainer>{props.children}</SDatePickerButtonContainer>;
};

export default DatePickerButtonContainer;
