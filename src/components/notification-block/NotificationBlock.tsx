import { FC } from "react";
import { SNotificationBlock } from "./styles/SNotificationBlock";

interface INotificationBlock {}

export const NotificationBlock: FC<INotificationBlock> = ({ children }) => {
  return <SNotificationBlock>{children}</SNotificationBlock>;
};
