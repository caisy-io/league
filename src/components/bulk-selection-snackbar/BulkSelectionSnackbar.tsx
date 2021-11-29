import React, { FC } from "react";
import { IconClose } from "../..";
import { SBulkSelectionSnackbar } from "./styles/SBulkSelectionSnackbar";
import { SBulkSelectionSnackbarChildren } from "./styles/SBulkSelectionSnackbarChildren";
import { SBulkSelectionSnackbarCloseButton } from "./styles/SBulkSelectionSnackbarCloseButton";
import { SBulkSelectionSnackbarSelected } from "./styles/SBulkSelectionSnackbarSelected";
import { SBulkSelectionSnackbarSelectedBadge } from "./styles/SBulkSelectionSnackbarSelectedBadge";
import { SBulkSelectionSnackbarWrapper } from "./styles/SBulkSelectionSnackbarWrapper";

interface IBulkSelectionSnackbar {
  selectedItems: number;
  onClose: () => void;
}

export const BulkSelectionSnackbar: FC<IBulkSelectionSnackbar> = ({ selectedItems, onClose, children }) => {
  return (
    <SBulkSelectionSnackbarWrapper>
      <SBulkSelectionSnackbar>
        <SBulkSelectionSnackbarSelected>
          <SBulkSelectionSnackbarSelectedBadge>{selectedItems}</SBulkSelectionSnackbarSelectedBadge>
          Items selected
        </SBulkSelectionSnackbarSelected>
        <SBulkSelectionSnackbarChildren>{children}</SBulkSelectionSnackbarChildren>
      </SBulkSelectionSnackbar>
      <SBulkSelectionSnackbarCloseButton onClick={onClose}>
        <IconClose />
      </SBulkSelectionSnackbarCloseButton>
    </SBulkSelectionSnackbarWrapper>
  );
};
