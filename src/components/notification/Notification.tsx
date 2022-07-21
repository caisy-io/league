import { FC } from "react";
import { SNotification } from "./styles/SNotification";

interface INotification {}

export const Notification: FC<INotification> = ({ children }) => {
  return <SNotification>{children}</SNotification>;
};
