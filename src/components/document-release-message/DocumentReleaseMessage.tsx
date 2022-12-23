import React from "react";
import { IconPublish } from "../../icons/IconPublish";
import { IconUnpublish } from "../../icons/IconUnpublish";
import { IconWarning } from "../../icons/IconWarning";
import { SMessageBody } from "../message/styles/SMessageBody";
import { SMessageContent } from "../message/styles/SMessageContent";
import { SMessageIcon } from "../message/styles/SMessageIcon";
import { SMessageLink } from "../message/styles/SMessageLink";
import { SMessageTitle } from "../message/styles/SMessageTitle";
import { SDocumentReleaseMessage } from "./styles/SDocumentReleaseMessage";

export type IDocumentReleaseMessageType = "UNPUBLISH" | "PUBLISH" | "UNSUBSCRIBED";
interface IDocumentReleaseMessage {
  type: IDocumentReleaseMessageType;
  message: string;
  description: any;
  LinkComponent: any;
  link?: { title: string; url: string };
  children?: React.ReactNode;
}

const DocumentReleaseMessageIcon: React.FC<{ type: IDocumentReleaseMessageType }> = ({ type }) => {
  switch (type) {
    case "PUBLISH":
      return (
        <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--text-suppportive-02)">
          {<IconPublish />}
        </SMessageIcon>
      );
    case "UNPUBLISH":
      return (
        <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--text-suppportive-02)">
          {<IconUnpublish />}
        </SMessageIcon>
      );

    case "UNSUBSCRIBED":
      return (
        <SMessageIcon backgroundColor={"var(--states-warning-bg)"} color="var(--states-warning)">
          {<IconWarning />}
        </SMessageIcon>
      );

    default:
      return null;
  }
};

export const DocumentReleaseMessage: React.FC<IDocumentReleaseMessage> = ({ LinkComponent, ...props }) => {
  return (
    <SDocumentReleaseMessage>
      <DocumentReleaseMessageIcon type={props.type} />
      <SMessageContent>
        <SMessageTitle>{props.message}</SMessageTitle>
        <SMessageBody>{props.description}</SMessageBody>
        {props?.link?.url && (
          <LinkComponent href={props.link.url}>
            <SMessageLink>{props.link.title}</SMessageLink>
          </LinkComponent>
        )}
      </SMessageContent>
      {props.children}
    </SDocumentReleaseMessage>
  );
};
