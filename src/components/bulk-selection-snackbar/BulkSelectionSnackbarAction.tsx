import React from "react";
import { SBulkSelectionSnackbarAction } from "./styles/SBulkSelectionSnackbarAction";

interface IBulkSelectionSnackbarAction {
  onClick: () => void;
}

export const BulkSelectionSnackbarAction: React.FC<IBulkSelectionSnackbarAction> = ({ onClick, children }) => {
  return <SBulkSelectionSnackbarAction onClick={onClick}>{children}</SBulkSelectionSnackbarAction>;
};
