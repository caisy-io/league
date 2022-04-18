import React, { CSSProperties, ReactNode } from "react";
import { IconCheckmark } from "../../icons";
import { IconWarning } from "../../icons";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { SIcon } from "./styles/SIcon";
import { SIconError } from "./styles/SIconError";
import { SIconSuccess } from "./styles/SIconSuccess";
import { SNotificationSnackbar } from "./styles/SNotificationSnackbar";
import { SNotificationSnackbarAction } from "./styles/SNotificationSnackbarAction";
import { SNotificationSnackbarLabel } from "./styles/SNotificationSnackbarLabel";

export interface INotificationSnackbarProps {
  exit: boolean;
  icon?: ReactNode;
  action?: React.ReactNode;
  content: string;
  success?: boolean;
  error?: boolean;
  styleOverwrite?: CSSProperties;
}

export const NotificationSnackbar: React.FC<INotificationSnackbarProps> = ({
  exit,
  icon,
  action,
  content,
  success,
  error,
  styleOverwrite,
}) => {
  return (
    <SNotificationSnackbar exit={exit} error={error} styleOverwrite={styleOverwrite}>
      <SFlex>
        <SIcon icon={icon} error={error} success={success}>
          {icon}
        </SIcon>
        <SIconSuccess icon={icon} error={error} success={success}>
          <IconCheckmark />
        </SIconSuccess>
        <SIconError icon={icon} error={error} success={success}>
          <IconWarning />
        </SIconError>
        <SNotificationSnackbarLabel>{content}</SNotificationSnackbarLabel>
      </SFlex>
      <SNotificationSnackbarAction>{action}</SNotificationSnackbarAction>
    </SNotificationSnackbar>
  );
};
