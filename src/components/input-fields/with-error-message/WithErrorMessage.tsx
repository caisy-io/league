import React from "react";
import { SErrorMessage } from "./styles/SErrorMessage";

interface IErrorMessage {
  content: string;
  active?: boolean;
}

export const WithErrorMessage: React.FC<IErrorMessage> = ({ ...props }) => {
  const ChildrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        children: [<SErrorMessage>{props.content}</SErrorMessage>].concat(child.props.children),
      });
    } else {
      return child;
    }
  });

  return <>{ChildrenWithProps}</>;
};
