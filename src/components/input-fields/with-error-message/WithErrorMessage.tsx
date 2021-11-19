import React from "react";
import { WithAddon } from "../with-addon/WithAddon";
import { SErrorMessage } from "./styles/SErrorMessage";

interface IErrorMessage {
  content: string[];
  active?: boolean;
}

export const WithErrorMessage: React.FC<IErrorMessage> = ({ ...props }) => {
  return (
    <WithAddon
      name="errorMessage"
      component={
        <>
          {props.content.map((message, index) => (
            <SErrorMessage key={index}>{message}</SErrorMessage>
          ))}
        </>
      }
      active={props.active}
      content={props.content}
    />
  );
};

interface IWithErrorMessageProps {
  errors: any[];
  addons?: any[];
}

interface IAddonHOC {
  addons?: any[];
}

export function withErrorMessage<T extends IAddonHOC>(WrappedComponent: React.ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const WithErrorMessage: React.ComponentType<T & IWithErrorMessageProps & IAddonHOC> = (props) => {
    const newAddon = (
      <>
        {props.errors?.map((message, index) => (
          <SErrorMessage key={index}>{message}</SErrorMessage>
        ))}
      </>
    );

    const addons = props?.addons?.slice() || [];
    addons.push(newAddon);

    return (
      <>
        <WrappedComponent {...(props as T)} addons={addons}>
          {props.children}
        </WrappedComponent>
      </>
    );
  };

  WithErrorMessage.displayName = `withError(${displayName})`;

  return WithErrorMessage;
}
