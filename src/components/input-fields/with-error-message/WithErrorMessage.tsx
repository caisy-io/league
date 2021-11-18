import React, { ComponentType } from "react";
import { SimpleInput } from "..";
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

interface IWithErrorProps {
  errors: [];
}

export function withError<T extends IWithErrorProps = IWithErrorProps>(WrappedComponent: ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithError = (props: Omit<T, keyof IWithErrorProps>) => {
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

  ComponentWithError.displayName = `withError(${displayName})`;

  return ComponentWithError;
}

export const InputWithErrors = withError(SimpleInput);
