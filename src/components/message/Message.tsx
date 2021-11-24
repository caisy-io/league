import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SMessage } from "./styles/SMessage";
import { SIconClose } from "./styles/SIconClose";
import { SMessageTitle } from "./styles/SMessageTitle";
import { SMessageBody } from "./styles/SMessageBody";
import { SMessageContent } from "./styles/SMessageContent";
import { SMessageWrapper } from "./styles/SMessageWrapper";
import { SMessageIcon } from "./styles/SMessageIcon";
import { IconError } from "../../icons/IconError";
import { IconCheckmark } from "../../icons/IconCheckmark";
import { IconInfo } from "../../icons/IconInfo";
import { IconClose } from "../../icons/IconClose";
import { NotificationSnackbar } from "../notification-snackbar/NotificationSnackbar";

export enum EMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
}

// I created the Message and MessageWrapper components in this file,
// because we don't use it anywhere else,
// and we don't want to accidentally import "Message" instead of "message" on our app

export interface IMessage {
  /* title?: string; */
  type: string;
  content: string;
  id: number;
  duration: number;
  icon?: React.ReactNode;
}

const MessageWrapper: React.FC<IMessage> = () => {
  return <SMessageWrapper></SMessageWrapper>;
};

const Message: React.FC<IMessage> = (msgConfig: IMessage) => {
  const [exit, setExit] = useState(false);
  const msgContainer = document.getElementById(`caisy-message-container-${msgConfig.id}`);

  setTimeout(() => {
    setExit(true);
  }, msgConfig.duration);

  const handleCloseMessage = () => {
    setExit(true);
    setTimeout(() => {
      msgContainer?.remove();
    }, 350);
  };

  const msgIcon = () => {
    switch (msgConfig.type) {
      case EMessageType.Success:
        return (
          <SMessageIcon backgroundColor={"var(--states-success-bg)"} color="var(--states-success)">
            {<IconCheckmark />}
          </SMessageIcon>
        );
      case EMessageType.Error:
        return (
          <SMessageIcon backgroundColor={"var(--states-error-bg)"} color="var(--states-error)">
            {<IconError />}
          </SMessageIcon>
        );
      case EMessageType.Info:
        return (
          <SMessageIcon backgroundColor={"var(--states-info-bg)"} color="var(--text-suppportive-02)">
            {<IconInfo />}
          </SMessageIcon>
        );
      default:
        return undefined;
    }
  };

  return msgContainer
    ? ReactDOM.createPortal(
      <NotificationSnackbar exit={exit} content={msgConfig.content} success={msgConfig.type == "success"} error={msgConfig.type == "error"}></NotificationSnackbar>
      /* <SMessage exit={exit}>
        {msgIcon()}
        <SMessageContent>
          <SMessageBody>{msgConfig.content}</SMessageBody>
        </SMessageContent>
        <SIconClose onClick={handleCloseMessage}>
          <IconClose></IconClose>
        </SIconClose>
      </SMessage> */,
      msgContainer,
    )
    : null;
};

interface IMessageDispatcher {
  success?: (payload: IMessage) => void;
  error?: (payload: IMessage) => void;
  info?: (payload: IMessage) => void;
}

// COMPONENT TO IMPORT IN OUR APP
export function message(): React.FC<IMessageDispatcher> | void { }

const renderMessage = (children, config, type) => {

  /* const defaultTitle = () => {
    switch (type) {
      case EMessageType.Success:
        return "Success!";
      case EMessageType.Error:
        return "Something went wrong!";
      case EMessageType.Info:
        return "Did you know?";
    }
  }; */

  /* const title = config?.title ? config.title : defaultTitle(); */
  const duration = config?.duration ? config.duration : 3000;

  const msgConfig = {
    type,
    /* title, */
    content: children,
    duration,
    id: Date.now(),
  };

  const nextDiv = document.getElementById("root") || document.getElementById("__next");
  
  let msgWrapper = document.querySelector(".caisy-message-wrapper");
  if (!msgWrapper) {
    msgWrapper = document.createElement("div");
    msgWrapper.classList.add("caisy-message-wrapper");
    ReactDOM.render(<MessageWrapper {...msgConfig} />, msgWrapper);
  }

  // REPLACE ME
  const msgContainer = document.createElement("div");
  const msgContainerId = `caisy-message-container-${msgConfig.id}`;
  msgContainer.id = msgContainerId;
  nextDiv?.append(msgWrapper);
  if (msgWrapper.firstChild) {
    // I DO THIS BECAUSE TYPESCRIPT DOESN'T RECOGNIZE "prepend" AS A VALID HTMLELEMENT METHOD
    (msgWrapper.firstChild as any).prepend(msgContainer);
  }

  // the +350 is the animation duration, we wait for it to finish before removing the element from the DOM
  setTimeout(() => {
    msgContainer?.remove();
  }, msgConfig?.duration + 350);

  ReactDOM.render(<Message {...msgConfig} />, msgContainer);
};

// FUNCTIONS TO BE CALLED IN OUR APP
interface IConfig {
  duration?: number;
  title?: string;
}

message.success = function MessageSuccess(children, config?) {
  renderMessage(children, config, EMessageType.Success);
};

message.error = function MessageError(children, config?) {
  renderMessage(children, config, EMessageType.Error);
};

message.info = function MessageInfo(children, config?) {
  renderMessage(children, config, EMessageType.Info);
};
