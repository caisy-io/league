import React from "react";
import useFieldContext from "../field-context/FieldContextContext";

interface IWithAddon {
  active?: boolean;
  name: string;
  component: JSX.Element;
  content: any;
}

export const WithAddon: React.FC<IWithAddon> = ({ ...props }) => {
  const { registerAddon } = useFieldContext();

  React.useEffect(() => {
    registerAddon({
      name: props.name,
      component: props.component,
      active: props.active,
      content: props.content,
    });
  }, [props.active, props.content]);

  return null;
};
