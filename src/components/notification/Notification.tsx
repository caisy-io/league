import { FC } from "react";
import { SNotification } from "./styles/SNotification";

interface INotification {
  children?: React.ReactNode;
}

export const Notification: FC<INotification> = ({ children }) => {
  return <SNotification>{children}</SNotification>;
};
