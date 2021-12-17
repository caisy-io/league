import React from "react";
import { SNotificationButton } from "./styles/SNotificationButton";

type INotificationButtonIcon = JSX.Element;
type INotificationButtonImagePreview = JSX.Element;

interface INotificationButton {
  indicator: INotificationButtonIcon | INotificationButtonImagePreview;
  onClick?: () => void;
}

export const NotificationButton: React.FC<INotificationButton> = ({ children, indicator, onClick }) => {
  return (
    <SNotificationButton onClick={onClick}>
      {indicator}
      {children}
    </SNotificationButton>
  );
};
