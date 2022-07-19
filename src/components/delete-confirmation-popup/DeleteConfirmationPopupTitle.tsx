import { FC } from "react";
import { SDeleteConfirmationPopupTitle } from "./styles/SDeleteConfirmationPopupTitle";

interface IDeleteConfirmationPopupTitle {}

export const DeleteConfirmationPopupTitle: FC<IDeleteConfirmationPopupTitle> = ({ children }) => {
  return <SDeleteConfirmationPopupTitle>{children}</SDeleteConfirmationPopupTitle>;
};
