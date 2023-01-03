import React from "react";
import { SDocumentStatusIndicator } from "./styles/SDocumentStatusIndicator";

export type IDocumentStatus = "PUBLISHED" | "CHANGED" | "DRAFT";
interface IDocumentStatusIndicator {
  status?: IDocumentStatus;
  children?: React.ReactNode;
}

export const DocumentStatusIndicator: React.FC<IDocumentStatusIndicator> = ({ ...props }) => {
  return <SDocumentStatusIndicator status={props.status}>{props.children || props.status}</SDocumentStatusIndicator>;
};
