import React from "react";
import { SLabel } from "./styles/SLabel";

interface ILabel {
  content: string;
  active?: boolean;
}

export const WithLabel: React.FC<ILabel> = ({ ...props }) => {
  const ChildrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        children: [<SLabel>{props.content}</SLabel>, child.props.children],
      });
    } else {
      return child;
    }
  });

  return <>{ChildrenWithProps}</>;
};
