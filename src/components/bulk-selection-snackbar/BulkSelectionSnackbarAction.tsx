import React from "react";
import { SBulkSelectionSnackbarAction } from "./styles/SBulkSelectionSnackbarAction";

interface IBulkSelectionSnackbarAction {
  onClick: () => void;
  children?: React.ReactNode;
}

export const BulkSelectionSnackbarAction: React.FC<IBulkSelectionSnackbarAction> = ({ onClick, children }) => {
  return <SBulkSelectionSnackbarAction onClick={onClick}>{children}</SBulkSelectionSnackbarAction>;
};
