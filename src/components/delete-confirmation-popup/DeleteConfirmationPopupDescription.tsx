import { FC } from "react";
import { SDeleteConfirmationPopupDescription } from "./styles/SDeleteConfirmationPopupDescription";

interface IDeleteConfirmationPopupDescription {
  children?: React.ReactNode;
}

export const DeleteConfirmationPopupDescription: FC<IDeleteConfirmationPopupDescription> = ({ children }) => {
  return <SDeleteConfirmationPopupDescription>{children}</SDeleteConfirmationPopupDescription>;
};
