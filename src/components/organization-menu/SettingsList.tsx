import React, { FC } from 'react';
import { SSettingsList } from './styles/SSettingsList';
import { SSettingsListTitle } from './styles/SSettingsListTitle';

interface ISettingsListProps {
  listTitle?: string | undefined,
  children?
}

export const SettingsList: FC<ISettingsListProps> = ({ listTitle, children }) => {
  return (
    <SSettingsList>
      <SSettingsListTitle>{listTitle}</SSettingsListTitle>
      {children}
    </SSettingsList>
  )
}
