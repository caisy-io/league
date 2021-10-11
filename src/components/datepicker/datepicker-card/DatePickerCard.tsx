import React from "react";
import SDatePickerCard from "./styles/SDatePickerCard";

interface IDatePickerCard {
  flexDirection?: "column" | "row" | "column-reverse" | "row-reverse";
}

const DatePickerCard: React.FC<IDatePickerCard> = ({ ...props }) => {
  return <SDatePickerCard flexDirection={props.flexDirection || "column"}>{props.children}</SDatePickerCard>;
};

export default DatePickerCard;
