import React from "react";
import { WithAddon } from "../with-addon/WithAddon";
import { SLabel } from "./styles/SLabel";

interface ILabel {
  content: string;
  active?: boolean;
}

export const WithLabel: React.FC<ILabel> = ({ ...props }) => {
  return (
    <WithAddon
      name="label"
      component={<SLabel>{props.content}</SLabel>}
      content={props.content}
      active={props.active}
    />
  );
};

interface IWithLabelProps {
  label: string;
  addons?: any[];
}

interface IAddonHOC {
  addons?: any[];
}

export function withLabel<T extends IAddonHOC>(WrappedComponent: React.ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const WithLabel: React.ComponentType<T & IWithLabelProps & IAddonHOC> = (props) => {
    const newAddon = <SLabel>{props.label}</SLabel>;

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

  WithLabel.displayName = `withLabel(${displayName})`;

  return WithLabel;
}
