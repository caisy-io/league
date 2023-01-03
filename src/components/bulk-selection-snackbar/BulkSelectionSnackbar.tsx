import React, { FC, ReactNode } from "react";
import { IconClose } from "../../icons";
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
  itemSelectedText?: string | ReactNode;
  itemsSelectedText?: string | ReactNode;
  errorOccurredText?: string | ReactNode;
  errorsOccurredText?: string | ReactNode;
  children?: React.ReactNode;
}

export const BulkSelectionSnackbar: FC<IBulkSelectionSnackbar> = ({
  selectedItems,
  errors,
  onClose,
  children,
  itemSelectedText,
  itemsSelectedText,
  errorOccurredText,
  errorsOccurredText,
}) => {
  return (
    <SBulkSelectionSnackbarWrapper>
      <SBulkSelectionSnackbar>
        <SBulkSelectionSnackbarSelected>
          <SBulkSelectionSnackbarSelectedBadge>{selectedItems}</SBulkSelectionSnackbarSelectedBadge>
          {selectedItems !== 1 ? itemsSelectedText ?? "items selected" : itemSelectedText ?? "item selected"}
        </SBulkSelectionSnackbarSelected>
        {errors > 0 && (
          <SBulkSelectionSnackbarErrors>
            <SBulkSelectionSnackbarErrorsBadge>{errors}</SBulkSelectionSnackbarErrorsBadge>
            {errors !== 1 ? errorsOccurredText ?? "errors occurred" : errorOccurredText ?? "error occurred"}
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
