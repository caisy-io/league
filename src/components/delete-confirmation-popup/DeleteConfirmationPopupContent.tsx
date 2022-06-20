import { FC } from "react";
import { SDeleteConfirmationPopupContent } from "./styles/SDeleteConfirmationPopupContent";

interface IDeleteConfirmationPopupContent {}

export const DeleteConfirmationPopupContent: FC<IDeleteConfirmationPopupContent> = ({ children }) => {
  return <SDeleteConfirmationPopupContent>{children}</SDeleteConfirmationPopupContent>;
};
