import { FC } from "react";
import { SDeleteConfirmationPopup } from "./styles/SDeleteConfirmationPopup";

interface IDeleteConfirmationPopup {}

export const DeleteConfirmationPopup: FC<IDeleteConfirmationPopup> = ({ children }) => {
  return <SDeleteConfirmationPopup>{children}</SDeleteConfirmationPopup>;
};
