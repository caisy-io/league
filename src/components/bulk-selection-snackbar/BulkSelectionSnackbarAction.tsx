import React from "react";
import { SBulkSelectionSnackbarAction } from "./styles/SBulkSelectionSnackbarAction";

interface IBulkSelectionSnackbarAction {
  onClick: () => void;
}

export const BulkSelectionSnackbarAction: React.FC<IBulkSelectionSnackbarAction> = ({ ...props }) => {
  return <SBulkSelectionSnackbarAction onClick={props.onClick}>{props.children}</SBulkSelectionSnackbarAction>;
};
