import React, { ReactNode } from 'react';
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconWarning } from "../../icons/IconWarning";
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { SIcon } from './styles/SIcon';
import { SIconError } from './styles/SIconError';
import { SIconSuccess } from './styles/SIconSuccess';
import { SNotificationSnackbar } from './styles/SNotificationSnackbar';
import { SNotificationSnackbarAction } from './styles/SNotificationSnackbarAction';
import { SNotificationSnackbarLabel } from './styles/SNotificationSnackbarLabel';

export interface INotificationSnackbarProps {
  exit: boolean;
  icon?: ReactNode;
  action?: React.ReactNode;
  content: String;
  success?: boolean;
  error?: boolean;
}

export const NotificationSnackbar: React.FC<INotificationSnackbarProps> = ({ exit, icon, action, content, success, error }) => {
  return (
    <SNotificationSnackbar exit={exit} error={error}>
      <SFlex>
        <SIcon icon={icon} error={error} success={success}>
          {icon}
        </SIcon>
        <SIconSuccess icon={icon} error={error} success={success}>
          <IconCheckmark></IconCheckmark>
        </SIconSuccess>
        <SIconError icon={icon} error={error} success={success}>
          <IconWarning></IconWarning>
        </SIconError>
        <SNotificationSnackbarLabel>{content}</SNotificationSnackbarLabel>
      </SFlex>
      <SNotificationSnackbarAction>{action}</SNotificationSnackbarAction>
    </SNotificationSnackbar>
  )
}
