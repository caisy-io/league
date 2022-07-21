import { FC } from "react";
import { IconCross } from "../../icons";
import { SNotification } from "./styles/SNotification";
import { SNotificationCloseButton } from "./styles/SNotificationCloseButton";

interface INotification {
  onClose?: () => void;
}

export const Notification: FC<INotification> = ({ children }) => {
  return <SNotification>{children}</SNotification>;
};
