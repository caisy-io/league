import React, { FC } from "react";
import { IconClose } from "../../icons/IconClose";
import { SBulkSelectionSnackbarErrorsBadge } from "./styles/SBulkSelectionSnackbarErrorsBadge";
import { SBulkSelectionSnackbar } from "./styles/SBulkSelectionSnackbar";
import { SBulkSelectionSnackbarChildren } from "./styles/SBulkSelectionSnackbarChildren";
import { SBulkSelectionSnackbarCloseButton } from "./styles/SBulkSelectionSnackbarCloseButton";
import { SBulkSelectionSnackbarErrors } from "./styles/SBulkSelectionSnackbarErrors";
import { SBulkSelectionSnackbarSelected } from "./styles/SBulkSelectionSnackbarSelected";
import { SBulkSelectionSnackbarSelectedBadge } from "./styles/SBulkSelectionSnackbarSelectedBadge";
import { SBulkSelectionSnackbarWrapper } from "./styles/SBulkSelectionSnackbarWrapper";

interface IBulkSelectionSnackbar {
  selectedItems: number;
  errors: number;
  onClose: () => void;
}

export const BulkSelectionSnackbar: FC<IBulkSelectionSnackbar> = ({ selectedItems, errors, onClose, children }) => {
  return (
    <SBulkSelectionSnackbarWrapper>
      <SBulkSelectionSnackbar>
        <SBulkSelectionSnackbarSelected>
          <SBulkSelectionSnackbarSelectedBadge>{selectedItems}</SBulkSelectionSnackbarSelectedBadge>
          {`item${selectedItems !== 1 ? "s" : ""} selected`}
        </SBulkSelectionSnackbarSelected>
        {errors > 0 && (
          <SBulkSelectionSnackbarErrors>
            <SBulkSelectionSnackbarErrorsBadge>{errors}</SBulkSelectionSnackbarErrorsBadge>
            {`error${errors !== 1 ? "s" : ""} occurred`}
          </SBulkSelectionSnackbarErrors>
        )}
        <SBulkSelectionSnackbarChildren>{children}</SBulkSelectionSnackbarChildren>
      </SBulkSelectionSnackbar>
      <SBulkSelectionSnackbarCloseButton onClick={onClose}>
        <IconClose />
      </SBulkSelectionSnackbarCloseButton>
    </SBulkSelectionSnackbarWrapper>
  );
};
