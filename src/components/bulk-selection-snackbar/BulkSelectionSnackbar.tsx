import React from "react";
import CloseIcon from "./CloseIcon";
import { SBulkSelectionSnackbar } from "./styles/SBulkSelectionSnackbar";
import { SBulkSelectionSnackbarChildren } from "./styles/SBulkSelectionSnackbarChildren";
import { SBulkSelectionSnackbarCloseButton } from "./styles/SBulkSelectionSnackbarCloseButton";
import { SBulkSelectionSnackbarSelected } from "./styles/SBulkSelectionSnackbarSelected";
import { SBulkSelectionSnackbarSelectedBadge } from "./styles/SBulkSelectionSnackbarSelectedBadge";
import { SBulkSelectionSnackbarWrapper } from "./styles/SBulkSelectionSnackbarWrapper";

interface IBulkSelectionSnackbar {
  selectedItems: any[];
  onClose: () => void;
}

export const BulkSelectionSnackbar: React.FC<IBulkSelectionSnackbar> = ({ ...props }) => {
  return (
    <SBulkSelectionSnackbarWrapper>
      <SBulkSelectionSnackbar>
        <SBulkSelectionSnackbarSelected>
          <SBulkSelectionSnackbarSelectedBadge>{props.selectedItems.length}</SBulkSelectionSnackbarSelectedBadge>
          Items selected
        </SBulkSelectionSnackbarSelected>
        <SBulkSelectionSnackbarChildren>{props.children}</SBulkSelectionSnackbarChildren>
      </SBulkSelectionSnackbar>
      <SBulkSelectionSnackbarCloseButton onClick={props.onClose}>
        <CloseIcon />
      </SBulkSelectionSnackbarCloseButton>
    </SBulkSelectionSnackbarWrapper>
  );
};
