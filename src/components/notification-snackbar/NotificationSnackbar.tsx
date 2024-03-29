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
  icon?: ReactNode;
  action?: (() => void) | React.ReactNode;
  content: string;
  success?: boolean;
  error?: boolean;
  styleOverwrite?: CSSProperties;
}

export const NotificationSnackbar: React.FC<INotificationSnackbarProps> = ({
  icon,
  action,
  content,
  success,
  error,
  styleOverwrite,
}) => {
  return (
    <SNotificationSnackbar error={error} styleOverwrite={styleOverwrite}>
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
      {/* @ts-ignore */}
      <SNotificationSnackbarAction>{action}</SNotificationSnackbarAction>
    </SNotificationSnackbar>
  );
};
