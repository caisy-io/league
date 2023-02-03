import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { NotificationSnackbar } from "../notification-snackbar/NotificationSnackbar";
import { GSMessage } from "./styles/GSMessage";
import { IMessageConfig } from "./types";

export enum EMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
}


// I created the Message and MessageWrapper components in this file,
// because we don't use it anywhere else,
// and we don't want to accidentally import "Message" instead of "message" on our app

export interface IMessage {
  type: string;
  content: string;
  id: number;
  duration: number;
  icon?: React.ReactNode;
  actionClick?: () => void;
}

const Message: React.FC<IMessage> = (msgConfig: IMessage) => {
  const [exit, setExit] = useState(false);

  setTimeout(() => {
    setExit(true);
  }, msgConfig.duration);

  // const handleCloseMessage = () => {
  //   setExit(true);
  //   setTimeout(() => {
  //     msgContainer?.remove();
  //   }, 350);
  // };

  return (
    <NotificationSnackbar
      exit={exit}
      content={msgConfig.content}
      success={msgConfig.type == "success"}
      error={msgConfig.type == "error"}
      icon={msgConfig.icon}
      action={msgConfig.actionClick}
    ></NotificationSnackbar>
  );
};

interface IMessageDispatcher {
  success?: (payload: IMessage) => void;
  error?: (payload: IMessage) => void;
  info?: (payload: IMessage) => void;
}

// COMPONENT TO IMPORT IN OUR APP
export function message(): React.FC<IMessageDispatcher> | void {}

const renderMessage = (children, config, type) => {
  const duration = config?.duration ? config.duration : 3000;

  const icon = config?.icon;

  const action = config?.action;

  const msgConfig = {
    type,
    content: children,
    duration,
    id: Date.now(),
    icon,
    action,
  };

  const nextDiv = config?.rootElementId ? document.getElementById(config.rootElementId) : document.getElementById("root") || document.getElementById("__next");

  if (!nextDiv) {
    console.warn("no root div found for message");
    return;
  }

  let msgWrapper = document.querySelector(".caisy-message-wrapper");
  if (!msgWrapper) {
    msgWrapper = document.createElement("div");
    msgWrapper.classList.add("caisy-message-wrapper");
    nextDiv.append(msgWrapper);

    const msgWrapperStyles = document.createElement("div");
    nextDiv.append(msgWrapperStyles);
    const root = createRoot(msgWrapperStyles as any);
    root.render(<GSMessage />);
  }

  if (msgWrapper) {
    const msgContainer = document.createElement("div");
    const msgContainerId = `caisy-message-container-${msgConfig.id}`;
    msgContainer.id = msgContainerId;

    msgWrapper.prepend(msgContainer);
    const root = createRoot(msgContainer);
    root.render(<Message {...msgConfig} />);
    setTimeout(() => {
      msgContainer?.remove();
    }, msgConfig?.duration + 350);
  }
};

message.success = function MessageSuccess(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Success);
};

message.error = function MessageError(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Error);
};

message.info = function MessageInfo(children: any, config?: IMessageConfig) {
  renderMessage(children, config, EMessageType.Info);
};
