import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NotificationSnackbar } from "../notification-snackbar/NotificationSnackbar";
import { SMessageWrapper } from "./styles/SMessageWrapper";

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

  return msgContainer
    ? ReactDOM.createPortal(
      <NotificationSnackbar exit={exit} content={msgConfig.content} success={msgConfig.type == "success"} error={msgConfig.type == "error"} icon={msgConfig.icon} action={msgConfig.actionClick}></NotificationSnackbar>,
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
  const duration = config?.duration ? config.duration : 3000;

  const icon = config?.icon;

  const action = config?.action;

  const msgConfig = {
    type,
    content: children,
    duration,
    id: Date.now(),
    icon,
    action
  };

  const nextDiv = document.getElementById("root") || document.getElementById("__next");

  let msgWrapper = document.querySelector(".caisy-message-wrapper");
  if (!msgWrapper) {
    msgWrapper = document.createElement("div");
    msgWrapper.classList.add("caisy-message-wrapper");
    ReactDOM.render(<MessageWrapper {...msgConfig} />, msgWrapper);
  }

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
