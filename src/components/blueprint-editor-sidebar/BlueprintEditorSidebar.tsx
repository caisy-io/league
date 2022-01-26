import React from 'react';
import { SBlueprintEditorSidebar } from './styles/SBlueprintEditorSidebar';

export const BlueprintEditorSidebar: React.FC = ({ ...props }) => {
  return (
    <SBlueprintEditorSidebar>
      {props.children}
    </SBlueprintEditorSidebar>
  )
}
