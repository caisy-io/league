import React from 'react';
import { SSchemaEditorSidebar } from './styles/SSchemaEditorSidebar';

export const SchemaEditorSidebar: React.FC = ({ ...props }) => {
  return (
    <SSchemaEditorSidebar>
      {props.children}
    </SSchemaEditorSidebar>
  )
}
