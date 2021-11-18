import React from 'react';
import {SNotificationSnackbar } from './styles/SNotificationSnackbar';

interface INotificationSnackbar{

}

export const NotificationSnackbar: React.FC<INotificationSnackbar> = ({...props}) => {
  console.log(`NotificationSnackbar props: `, props);
  return (
    <SNotificationSnackbar>
      {props.children}
    </SNotificationSnackbar>
  )
}
