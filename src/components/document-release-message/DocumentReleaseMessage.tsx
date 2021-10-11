import React from "react";
import { IconPublish, IconUnpublish, IconWarning } from "../..";
import { SMessageBody } from "../message/styles/SMessageBody";
import { SMessageContent } from "../message/styles/SMessageContent";
import { SMessageIcon } from "../message/styles/SMessageIcon";
import { SMessageLink } from "../message/styles/SMessageLink";
import { SMessageTitle } from "../message/styles/SMessageTitle";
import { SDocumentReleaseMessage } from "./styles/SDocumentReleaseMessage";
import Link from "next/link";
export type IDocumentReleaseMessageType = "UNPUBLISH" | "PUBLISH" | "UNSUBSCRIBED";
interface IDocumentReleaseMessage {
  type: IDocumentReleaseMessageType;
  message: string;
  description: any;
  link?: { title: string; url: string };
}

const DocumentReleaseMessageIcon: React.FC<{ type: IDocumentReleaseMessageType }> = ({ type }) => {
  switch (type) {
    case "PUBLISH":
      return (
        <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--states-info)">
          {<IconPublish />}
        </SMessageIcon>
      );
    case "UNPUBLISH":
      return (
        <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--states-info)">
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

export const DocumentReleaseMessage: React.FC<IDocumentReleaseMessage> = ({ ...props }) => {
  return (
    <SDocumentReleaseMessage>
      <DocumentReleaseMessageIcon type={props.type} />
      <SMessageContent>
        <SMessageTitle>{props.message}</SMessageTitle>
        <SMessageBody>{props.description}</SMessageBody>
        {props?.link?.url && (
          <Link href={props.link.url}>
            <SMessageLink>{props.link.title}</SMessageLink>
          </Link>
        )}
      </SMessageContent>
      {props.children}
    </SDocumentReleaseMessage>
  );
};
