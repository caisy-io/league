import { FC } from "react";
import { SDeleteConfirmationPopupTitle } from "./styles/SDeleteConfirmationPopupTitle";

interface IDeleteConfirmationPopupTitle {
  children?: React.ReactNode;
}

export const DeleteConfirmationPopupTitle: FC<IDeleteConfirmationPopupTitle> = ({ children }) => {
  return <SDeleteConfirmationPopupTitle>{children}</SDeleteConfirmationPopupTitle>;
};
