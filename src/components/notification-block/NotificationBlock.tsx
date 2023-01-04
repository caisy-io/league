import { FC } from "react";
import { SNotificationBlock } from "./styles/SNotificationBlock";

interface INotificationBlock {
  children?: React.ReactNode;
}

export const NotificationBlock: FC<INotificationBlock> = ({ children }) => {
  return <SNotificationBlock>{children}</SNotificationBlock>;
};
