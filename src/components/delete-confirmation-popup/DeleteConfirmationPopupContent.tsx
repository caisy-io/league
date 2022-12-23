import { FC } from "react";
import { SDeleteConfirmationPopupContent } from "./styles/SDeleteConfirmationPopupContent";

interface IDeleteConfirmationPopupContent {
  children?: React.ReactNode;
}

export const DeleteConfirmationPopupContent: FC<IDeleteConfirmationPopupContent> = ({ children }) => {
  return <SDeleteConfirmationPopupContent>{children}</SDeleteConfirmationPopupContent>;
};
