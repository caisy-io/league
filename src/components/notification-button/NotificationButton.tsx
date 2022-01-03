import React from "react";
import { SNotificationButton } from "./styles/SNotificationButton";
import { SNotificationButtonImageWrapper } from "./styles/SNotificationButtonImageWrapper";

interface INotificationButtonBasic {
  onClick?: () => void;
}

interface INotificationButtonWithIcon extends INotificationButtonBasic {
  image?: never;
  icon: JSX.Element;
}

interface INotificationButtonWithImage extends INotificationButtonBasic {
  icon?: never;
  image: JSX.Element;
}

type INotificationButton = INotificationButtonWithIcon | INotificationButtonWithImage;

export const NotificationButton: React.FC<INotificationButton> = ({ children, image, icon, onClick }) => {
  return (
    <SNotificationButton onClick={onClick}>
      {icon ? <>{icon}</> : <SNotificationButtonImageWrapper>{image}</SNotificationButtonImageWrapper>}
      {children}
    </SNotificationButton>
  );
};
