import React from "react";
import { IconEdit, IconInfo } from "../..";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { SMessageBody } from "../message/styles/SMessageBody";
import { SMessageContent } from "../message/styles/SMessageContent";
import { SMessageIcon } from "../message/styles/SMessageIcon";
import { SMessageTitle } from "../message/styles/SMessageTitle";
import { SDocumentStatusMessage } from "./styles/SDocumentStatusMessage";

export type IDocumentStatusMessageType = "changed" | "published" | "draft";
interface IDocumentStatusMessage {
  type: IDocumentStatusMessageType;
  message: string;
  description: any;
}

const DocumentStatusMessageIcon: React.FC<{ type: IDocumentStatusMessageType }> = ({ type }) => {
  switch (type) {
    case "published":
      return (
        <SMessageIcon backgroundColor={"var(--states-success-bg)"} color="var(--states-success)">
          {<IconCheckmark />}
        </SMessageIcon>
      );
    case "draft":
      return (
        <SMessageIcon backgroundColor={"var(--states-warning-bg)"} color="var(--states-warning)">
          {<IconEdit />}
        </SMessageIcon>
      );
    case "changed":
      return (
        <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--states-info)">
          {<IconInfo />}
        </SMessageIcon>
      );
    default:
      return (
        <SMessageIcon backgroundColor={"var(--states-warning-bg)"} color="var(--states-warning)">
          {<IconEdit />}
        </SMessageIcon>
      );
  }
};

export const DocumentStatusMessage: React.FC<IDocumentStatusMessage> = ({ ...props }) => {
  return (
    <SDocumentStatusMessage>
      <DocumentStatusMessageIcon type={props.type} />
      <SMessageContent>
        <SMessageTitle>{props.message}</SMessageTitle>
        <SMessageBody>{props.description}</SMessageBody>
      </SMessageContent>
      {props.children}
    </SDocumentStatusMessage>
  );
};
