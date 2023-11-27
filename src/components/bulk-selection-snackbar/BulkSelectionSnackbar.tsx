import React, { FC, ReactNode } from "react";
import { IconClose } from "../../icons";
import { SBulkSelectionSnackbar } from "./styles/SBulkSelectionSnackbar";
import { SBulkSelectionSnackbarChildren } from "./styles/SBulkSelectionSnackbarChildren";
import { SBulkSelectionSnackbarCloseButton } from "./styles/SBulkSelectionSnackbarCloseButton";
import { SBulkSelectionSnackbarErrors } from "./styles/SBulkSelectionSnackbarErrors";
import { SBulkSelectionSnackbarSelected } from "./styles/SBulkSelectionSnackbarSelected";
import { SBulkSelectionSnackbarWrapper } from "./styles/SBulkSelectionSnackbarWrapper";
import { Badge, EBadgePosition } from "../badge";

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
          <Badge value={`${selectedItems}`} type="regular" size="small" position={EBadgePosition.Center} />
          {selectedItems !== 1 ? itemsSelectedText ?? "items selected" : itemSelectedText ?? "item selected"}
        </SBulkSelectionSnackbarSelected>
        {errors > 0 && (
          <SBulkSelectionSnackbarErrors>
            <Badge value={`${errors}`} type="white" size="micro" position={EBadgePosition.Center} />
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
